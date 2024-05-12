import { FC, PropsWithChildren, useState } from 'react';
import { Items, LabelText, ListContainer } from './list.styles';

export interface ListProps {
  name: string;
}

export const List: FC<PropsWithChildren<ListProps>> = ({ name, children }) => {
  const [show, setShow] = useState(false);
  return (
    <ListContainer>
      <LabelText onClick={() => setShow(!show)}>{name}</LabelText>
      {show && <Items>{children}</Items>}
    </ListContainer>
  );
};
