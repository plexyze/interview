import { Code } from '../../../../../components';
import { Question } from '../../../../../components/question';

const CODE = `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = ${'`'}Вы нажали ${'${count}'} раз${'`'};
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}`;

export const UseEffectQuestion = () => {
  return (
    <Question question='useEffect'>
      <Code code={CODE} />
      <p>
        Когда вы вызываете useEffect, React получает указание запустить вашу
        функцию с «эффектом» после того, как он отправил изменения в DOM.
        Поскольку эффекты объявляются внутри компонента, у них есть доступ к его
        пропсам и состоянию. По умолчанию, React запускает эффекты после каждого
        рендера, включая первый рендер.
      </p>
    </Question>
  );
};
