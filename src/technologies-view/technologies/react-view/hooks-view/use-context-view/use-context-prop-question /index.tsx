import { Code, Question } from '../../../../../../components';
import { Bold } from '../../../../../../components/bold';

const CODE = `useContext(SomeContext)`;

export const UseContextParamQuestion = () => {
  return (
    <Question question='Что передают в качестве параметра в useContext?'>
      <Code code={CODE} />
      <p>
        <Bold>SomeContext</Bold>: контекст, который вы ранее создали с помощью
        createContext. Контекст сам по себе не содержит информации, он лишь
        представляет ту информацию, которую вы можете предоставить или прочитать
        из компонентов.
      </p>
    </Question>
  );
};
