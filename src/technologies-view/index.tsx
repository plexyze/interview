import { List } from '../components';
import { JavaScriptView } from './technologies/java-script-view';
import { ReactView } from './technologies/react-view';

export const TechnologiesView = () => {
  return (
    <List name='Технологии'>
      <JavaScriptView />
      <ReactView />
    </List>
  );
};
