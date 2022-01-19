import React, { useContext, useState } from 'react';

export const ThemeModeContext = React.createContext({darkTheme: false, toggleTheme: () => {}});

export function useThemeModeContext () {
  return useContext(ThemeModeContext);
}

type Props = {
  children: (React.ReactChild | React.ReactChild[])
}

export function ThemeModeProvider({ children }: Props) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    return setDarkTheme(previous => !previous);
  }

  return (
    <ThemeModeContext.Provider value={{darkTheme, toggleTheme}}>
      { children }
    </ThemeModeContext.Provider>
  )
}