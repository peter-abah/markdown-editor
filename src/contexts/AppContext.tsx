import React, {
  useContext,
  createContext
} from 'react';

import { useBoolean } from 'usehooks-ts';

export interface AppContextInterface {
  isMenuOpen: Boolean;
  toggleMenu: () => void;
};

export const AppContext = createContext<AppContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const { value: isMenuOpen, toggle: toggleMenu } = useBoolean();
  
  const value = { 
    isMenuOpen, toggleMenu
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
