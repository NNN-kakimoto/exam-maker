import { Choice } from './choice';

export type Question = {
  id: string;
  examId: string;
  text: string;
  correctChoiceId: string | undefined;
  choices: Choice[] | undefined;
  // TODO
  // createdAt: string;
  // updatedAt: string;
};
