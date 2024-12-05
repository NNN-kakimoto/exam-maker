import { Question } from '@/types/question';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const QuestionPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(`/api/questions/${id}`);
      const data = await response.json();
      console.log(data);
      setQuestion(data);
    };

    console.log('question id:', id);
    if (id) {
      fetchQuestion();
    }
  }, [router.isReady]);
  return (
    <>
      <h1>Question Page</h1>

      {question && (
        <>
          <h2 className='text-lg'>{question.text}</h2>
          <ul className='pl-2 text-sm'>
            {question.answers?.map((answer) => (
              <li key={answer.id} className='w-full hover:bg-slate-200'>
                <label className='block'>
                  <input type='radio' name='answer' value={answer.id} />
                  <span>
                    {answer.text}
                    {question.correctAnswerId === answer.id && ' (correct)'}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default QuestionPage;
