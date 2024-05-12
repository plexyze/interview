import { FC } from 'react';
import { AppContextProvider } from './context';
import { TechnologiesView } from './technologies-view';
import { AppContainer } from './App.styles';

const App: FC = () => {
  return (
    <AppContextProvider>
      <AppContainer>
        <TechnologiesView />
      </AppContainer>
    </AppContextProvider>
  );
};

export default App;
