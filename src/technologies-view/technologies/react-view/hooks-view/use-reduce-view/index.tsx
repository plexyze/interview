import { List } from '../../../../../components';
import { UseReducerParamQuestion } from './use-reducer-prop-question';
import { UseReducerQuestion } from './use-reducer-question';
import { UseReducerReturnQuestion } from './use-reducer-return-question ';
import { DispatchParamQuestion } from './despatch-prop-question ';
import { ReducerQuestion } from './reducer-question ';

export const UseReduceView = () => {
  return (
    <List name='useReduce'>
      <UseReducerQuestion />
      <UseReducerParamQuestion />
      <UseReducerReturnQuestion />
      <DispatchParamQuestion />
      <ReducerQuestion />
    </List>
  );
};
