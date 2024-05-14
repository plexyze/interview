import { List } from '../../../../components';
import { HooksQuestion } from './hooks-question';
import { UseContextView } from './use-context-view';
import { UseEffectQuestion } from './use-effect-question';
import { UseReduceView } from './use-reduce-view';
import { UseStateView } from './use-state-view';

export const HooksView = () => {
  return (
    <List name='Хуки'>
      <HooksQuestion />
      <UseStateView />
      <UseReduceView />
      <UseContextView />
      <UseEffectQuestion />
    </List>
  );
};
