import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.upsert({
    where: { id: 'user_id_1' },
    update: {},
    create: {
      id: 'user_id_1',
      lineUid: 'line_uid_1',
      displayName: 'user1',
      pictureUrl: '/images/dummy_user_icon.png',
      statusMessage: '紹介文です。',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const exam = await prisma.exam.upsert({
    where: { id: 'exam_id_1' },
    update: {},
    create: {
      id: 'exam_id_1',
      code: 'AA0001',
      title: '例題集',
      isQuestionOrderRandom: true,
      isChoicesOrderRandom: true,
      passingScore: 1,
      questionCount: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const questions = await Promise.all([
    prisma.question.upsert({
      where: { id: 'question_id_1' },
      update: {},
      create: {
        id: 'question_id_1',
        examId: 'exam_id_1',
        text: '日本の首都はどこでしょう?',
        infoText: '正解は「東京」です。当たり前です。',
        choices: {
          create: [
            {
              id: 'choice_id_11',
              text: '東京',
              isCorrect: true,
            },
            {
              id: 'choice_id_12',
              text: '大阪',
              isCorrect: false,
            },
            {
              id: 'choice_id_13',
              text: '名古屋',
              isCorrect: false,
            },
            {
              id: 'choice_id_14',
              text: '北海道',
              isCorrect: false,
            },
          ],
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
    prisma.question.upsert({
      where: { id: 'question_id_2' },
      update: {},
      create: {
        id: 'question_id_2',
        examId: 'exam_id_1',
        text: '改行して問題を出すと\nどうなるでしょう?',
        choices: {
          create: [
            {
              id: 'choice_id_21',
              text: '正解の選択肢',
              isCorrect: true,
            },
            {
              id: 'choice_id_22',
              text: '改行して選択肢を出すと\nどうなるでしょう?',
              isCorrect: false,
            },
            {
              id: 'choice_id_23',
              text: '選択肢',
              isCorrect: false,
            },
            {
              id: 'choice_id_24',
              text: '選択肢',
              isCorrect: false,
            },
          ],
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
    prisma.question.upsert({
      where: { id: 'question_id_3' },
      update: {},
      create: {
        id: 'question_id_3',
        examId: 'exam_id_1',
        text: '改行して問題を出すと\nどうなるでしょう?_2',
        choices: {
          create: [
            {
              id: 'choice_id_31',
              text: '正解の選択肢',
              isCorrect: true,
            },
            {
              id: 'choice_id_32',
              text: '改行して選択肢を出すと\nどうなるでしょう?',
              isCorrect: false,
            },
            {
              id: 'choice_id_33',
              text: '選択肢',
              isCorrect: false,
            },
            {
              id: 'choice_id_34',
              text: '選択肢',
              isCorrect: false,
            },
          ],
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
  ]);
  console.log({ user, exam, questions });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
