import { Code, Question } from '../../../../../../components';

const CODE = `import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...`;

export const UseStateQuestion = () => {
  return (
    <Question question='Для чего хук useState?'>
      <p>
        useState— это React Hook, который позволяет вам добавлять переменную
        состояния в ваш компонент.
      </p>
      <Code code={CODE} />
    </Question>
  );
};
