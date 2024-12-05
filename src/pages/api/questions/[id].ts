import { Question } from '@/types/question';
import { NextApiRequest, NextApiResponse } from 'next';

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
  return response.json(<Question>{
    id: request.query.id as string,
    examId: 'exam_id_1',
    text: '日本の首都はどこでしょう?',
    correctAnswerId: 'choice_id_1',
    answers: [
      { id: 'choice_id_1', questionId: '1', text: '東京都', isCorrect: true },
      { id: 'choice_id_2', questionId: '1', text: '大阪府', isCorrect: false },
      { id: 'choice_id_3', questionId: '1', text: '愛知県', isCorrect: false },
      { id: 'choice_id_4', questionId: '1', text: '北海道', isCorrect: false },
    ].sort(() => Math.random() - 0.5),
  });
}

async function post(request: NextApiRequest, response: NextApiResponse) {
  console.log('POST method');
  console.log(request.query);
  return response.json({ status: 'OK', request: request.query });
}
