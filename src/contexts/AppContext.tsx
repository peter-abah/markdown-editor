import React, {
  useEffect,
  useContext,
  createContext
} from 'react';

import { useBoolean, useDarkMode } from 'usehooks-ts';

export interface AppContextInterface {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenu: (val: boolean) => void;
  theme: string;
  toggleTheme: () => void;
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

  const {isDarkMode, toggle: toggleTheme} = useDarkMode();
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, [isDarkMode]);
  
  const theme = isDarkMode ? 'dark' : 'light';
  const value = { 
    isMenuOpen,
    toggleMenu,
    setMenu, 
    theme,
    toggleTheme
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
