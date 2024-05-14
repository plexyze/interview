import { List } from '../../../../../components';
import { UseContextParamQuestion } from './use-context-prop-question ';
import { UseContextQuestion } from './use-context-question';
import { UseContextReturnQuestion } from './use-context-return-question ';

export const UseContextView = () => {
  return (
    <List name='useContext'>
      <UseContextQuestion />
      <UseContextParamQuestion />
      <UseContextReturnQuestion />
    </List>
  );
};
