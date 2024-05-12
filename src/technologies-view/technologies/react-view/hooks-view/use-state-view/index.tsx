import { List } from '../../../../../components';
import { UseStateParamQuestion } from './use-state-prop-question ';
import { UseStateQuestion } from './use-state-question';
import { UseStateReturnQuestion } from './use-state-return-question ';
import { UseStateSetFunctionParamQuestion } from './use-state-set-function-prop-question ';

export const UseStateView = () => {
  return (
    <List name='useState'>
      <UseStateQuestion />
      <UseStateParamQuestion />
      <UseStateReturnQuestion />
      <UseStateSetFunctionParamQuestion />
    </List>
  );
};
