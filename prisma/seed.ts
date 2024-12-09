import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();
async function main() {
  const questions1 = await prisma.question.upsert({
    where: { id: 'question_id_1' },
    update: {},
    create: {
      id: 'question_id_1',
      examId: 'exam_id_i',
      text: '日本の首都はどこでしょう?',
      choices: {
        create: [
          {
            id: 'choice_id_1',
            text: '東京',
            isCorrect: true,
          },
          {
            id: 'choice_id_2',
            text: '大阪',
            isCorrect: false,
          },
          {
            id: 'choice_id_3',
            text: '名古屋',
            isCorrect: false,
          },
          {
            id: 'choice_id_4',
            text: '北海道',
            isCorrect: false,
          },
        ],
      },
    },
  });
  const questions2 = await prisma.question.upsert({
    where: { id: 'question_id_2' },
    update: {},
    create: {
      id: 'question_id_2',
      examId: 'exam_id_1',
      text: '改行して問題を出すと\nどうなるでしょう?',
      choices: {
        create: [
          {
            id: 'choice_id_11',
            text: '正解の選択肢',
            isCorrect: true,
          },
          {
            id: 'choice_id_12',
            text: '改行して選択肢を出すと\nどうなるでしょう?',
            isCorrect: false,
          },
          {
            id: 'choice_id_13',
            text: '選択肢',
            isCorrect: false,
          },
          {
            id: 'choice_id_1４',
            text: '選択肢',
            isCorrect: false,
          },
        ],
      },
    },
  });
  console.log({ questions1, questions2 });
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
