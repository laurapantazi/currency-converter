import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext(false);
export const ThemeUpdateContext = React.createContext(()=>{});

type Props = {
  children: (React.ReactChild | React.ReactChild[])
}

export function useTheme () {
  return useContext(ThemeContext);
}
export function useThemeUpdate () {
  return useContext(ThemeUpdateContext);
}


export function ThemeProvider({ children }: Props) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(previous => !previous)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}