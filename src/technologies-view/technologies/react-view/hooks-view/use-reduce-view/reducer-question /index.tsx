import { Code, Question } from '../../../../../../components';

const CODE_EXAMPLE = `function reducer(state, action) {
  // ...
}`;

const CODE_SWITCH_EXAMPLE = `function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}`;

export const ReducerQuestion = () => {
  return (
    <Question question='Как объявляется функция reducer?'>
      <p>Функция редуктора объявляется следующим образом:</p>
      <Code code={CODE_EXAMPLE} />
      <p>
        Затем вам реализовать рассчитает следующее состояние. По соглашению
        принято писать это как switch утверждение. Для каждого case из них
        switch вычислите и верните следующее состояние.
      </p>
      <Code code={CODE_SWITCH_EXAMPLE} />
    </Question>
  );
};
