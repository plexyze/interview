import { FC, PropsWithChildren, useState } from 'react';
import { Answer, QuestionContainer, QuestionText } from './question.styles';

export interface QuestionProps {
  question: string;
}

export const Question: FC<PropsWithChildren<QuestionProps>> = ({
  question,
  children,
}) => {
  const [show, setShow] = useState(false);
  return (
    <QuestionContainer>
      <QuestionText onClick={() => setShow(!show)}>{question}</QuestionText>
      {show && <Answer>{children}</Answer>}
    </QuestionContainer>
  );
};
