import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface Context {
  path: string[];
  push: (value: string) => void;
  pop: () => void;
}

const defaultContext: Context = {
  path: [],
  push: () => {},
  pop: () => {},
};

const AppContext = createContext(defaultContext);

export const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [path, setPath] = useState<string[]>([]);

  const push = useCallback((value: string) => {
    setPath((prev) => [...prev, value]);
  }, []);
  const pop = useCallback(() => {
    setPath((prev) => (prev.length ? prev.slice(0, prev.length - 1) : []));
  }, []);

  return (
    <AppContext.Provider
      value={{
        path,
        push,
        pop,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
