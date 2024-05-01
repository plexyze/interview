import {useEffect, FC, useState} from "react";

const App: FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  }, [counter]);

  return (
    <>
      <div>Hello{counter}</div>
    </>
  );
};

export default App;
