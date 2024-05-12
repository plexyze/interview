import { Code, Question } from '../../../../../../components';
import { Bold } from '../../../../../../components/bold';

const CODE = `const [state, dispatch] = useReducer(reducer, initialArg, init?)`;

export const UseReducerReturnQuestion = () => {
  return (
    <Question question='Что возвращает useReducer?'>
      <p>
        <Bold>useReducer</Bold> возвращает массив ровно с двумя значениями:
      </p>
      <Code code={CODE} />
      <p>
        <Bold>state</Bold> - Текущее состояние. Во время первого рендеринга
        устанавливается значение init(initialArg) или initialArg(если нет init).
      </p>
      <p>
        <Bold>Функция dispatch</Bold>, которая позволяет обновить состояние до
        другого значения и запустить повторный рендеринг.
      </p>
    </Question>
  );
};
