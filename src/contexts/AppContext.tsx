import React, {
  useContext,
  createContext
} from 'react';

import { useBoolean } from 'usehooks-ts';

export interface AppContextInterface {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenu: (val: boolean) => void;
};

export const AppContext = createContext<AppContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const {
    value: isMenuOpen,
    toggle: toggleMenu,
    setValue: setMenu
  } = useBoolean(false);
  
  const value = { 
    isMenuOpen, toggleMenu, setMenu
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface;
};

export default AppContextProvider;
