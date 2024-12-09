import { PrismaClient } from '@/generated/client';
import { Profile } from '@/recoilAtoms/profile';
import { BadRequestError, MethodNotAllowedError } from '@/types/errors';
import { NextApiRequest, NextApiResponse } from 'next';
import { ulid } from 'ulid';
import { z } from 'zod';

const prisma = new PrismaClient();

const userCreateSchema = z.object({
  lineUid: z.string(),
  displayName: z.string(),
  pictureUrl: z.string().optional(),
  statusMessage: z.string().optional(),
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  try {
    switch (method) {
      case 'POST':
        return response.json(await post(request));
      default:
        throw new MethodNotAllowedError();
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      response.status(400).json({ message: error.messages });
      return;
    } else if (error instanceof MethodNotAllowedError) {
      response.status(405).json({ message: error.message });
      return;
    }
    console.error(error);
    response.status(500).end();
    return;
  }
}
async function post(request: NextApiRequest): Promise<Omit<Profile, 'status'>> {
  const validate = userCreateSchema.safeParse(request.body);
  if (validate.error) {
    throw new BadRequestError(
      validate.error.issues.map((error) => `${error.path}: ${error.message}`),
    );
  }

  // ユーザーが存在するかチェック
  const user = await prisma.user.findFirst({
    where: {
      lineUid: validate.data.lineUid,
    },
  });

  if (user !== null) {
    console.log(
      `user logged in \`userId: ${user.id}, timestamp: ${Date.now()}\``,
    );
    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  // ユーザーが存在しない場合は作成
  const id = ulid();
  const createdUser = await prisma.user.create({
    data: {
      id,
      lineUid: validate.data.lineUid,
      displayName: validate.data.displayName,
      pictureUrl: validate.data.pictureUrl,
      statusMessage: validate.data.statusMessage,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log(
    `user created \`userId: ${createdUser.id}, timestamp: ${Date.now()}\``,
  );
  return {
    ...createdUser,
    createdAt: createdUser.createdAt.toISOString(),
    updatedAt: createdUser.updatedAt.toISOString(),
  };
}
