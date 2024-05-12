import { Code, Question } from '../../../../../../components';
import { Bold } from '../../../../../../components/bold';

const CODE = `import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...`;

export const UseReducerQuestion = () => {
  return (
    <Question question='Для чего хук useReducer?'>
      <p>
        <Bold>useReducer</Bold> — это React Hook, который позволяет добавить
        состояние с функцией редуктором к вашему компоненту.
      </p>
      <Code code={CODE} />
    </Question>
  );
};
