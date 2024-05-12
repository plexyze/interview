import { Code, Question } from '../../../../../../components';
import { Bold } from '../../../../../../components/bold';

const CODE = `function handleClick() {
  dispatch({ type: 'incremented_age' });
}`;

export const DispatchParamQuestion = () => {
  return (
    <Question question='Что передают в качестве параметра в функцию despatch?'>
      <p>
        <Bold>Функция dispatch</Bold>, которая позволяет вам изменить его в
        ответ на взаимодействие. Чтобы обновить содержимое экрана, вызовите
        dispatch объект, представляющий действия пользователя, который
        называется действием :
      </p>
      <Code code={CODE} />
      <p>
        React передаст текущее состояние и действие вашей функции редуктора. Ваш
        редуктор рассчитает и вернет следующее состояние. React сохранит это
        следующее состояние, отобразит с его помощью ваш компонент и обновит
        пользовательский интерфейс.
      </p>
    </Question>
  );
};
