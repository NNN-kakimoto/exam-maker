import { Answer } from './choice';

export type Question = {
  id: string;
  examId: string;
  text: string;
  correctAnswerId: string | undefined;
  answers: Answer[] | undefined;
  // TODO
  // createdAt: string;
  // updatedAt: string;
};
