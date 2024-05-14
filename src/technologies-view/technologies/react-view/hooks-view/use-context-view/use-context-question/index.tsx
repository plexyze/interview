import { Code, Question } from '../../../../../../components';
import { Bold } from '../../../../../../components/bold';

const CODE = `import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...`;

export const UseContextQuestion = () => {
  return (
    <Question question='Для чего хук useContext?'>
      <p>
        <Bold>useContext</Bold> — это React Hook, который позволяет вам читать
        контекст вашего компонента и подписываться на него.
      </p>
      <Code code={CODE} />
    </Question>
  );
};
