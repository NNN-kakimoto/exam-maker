import { PrismaClient } from '@/generated/client';
import { Question } from '@/types/question';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  switch (method) {
    case 'GET':
      return get(request, response);
    case 'POST':
      return post(request, response);
    default:
      return response.status(405).end();
  }
}

async function get(request: NextApiRequest, response: NextApiResponse) {
  console.log('GET method');
  console.log(request.query);
  const question = await prisma.question.findFirst({
    where: {
      id: request.query.id as string,
    },
    include: {
      choices: true,
    },
  });
  console.log(question);
  if (!question) {
    return response
      .status(404)
      .json({ message: '問題が見つかりませんでした。' });
  }
  return response.json(<Question>{
    id: question.id,
    examId: question.examId,
    text: question.text,
    correctChoiceId: question.choices.find((choice) => choice.isCorrect)?.id,
    choices: question.choices
      .sort(() => Math.random() - 0.5)
      .map((choice) => ({
        id: choice.id,
        questionId: choice.questionId,
        text: choice.text,
        isCorrect: choice.isCorrect,
      })),
  });
}

async function post(request: NextApiRequest, response: NextApiResponse) {
  console.log('POST method');
  console.log(request.query);
  return response.json({ status: 'OK', request: request.query });
}
