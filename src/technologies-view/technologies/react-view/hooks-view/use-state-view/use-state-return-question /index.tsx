import { Code, Question } from '../../../../../../components';

const CODE = `import { useState } from 'react';

function MyComponent() {
  const [something, setSomething] = useState(initialState);
  // ...`;

export const UseStateReturnQuestion = () => {
  return (
    <Question question='Что возвращает useState?'>
      <p>useState возвращает массив из двух значений:</p>
      <Code code={CODE} />
      <p>
        something - Текущее состояние. Во время первого рендеринга он будет
        соответствовать значению инициализации initialState.
      </p>
      <p>
        setSomething - Функция set, которая позволяет обновить состояние до
        другого значения и запустить повторный рендеринг.
      </p>
    </Question>
  );
};
