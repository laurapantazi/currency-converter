import CurrencyForm from './CurrencyForm';
import {Container} from './Container.js';
import { useTheme, useThemeUpdate } from './ThemeContext';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { ThemeProvider } from 'styled-components';
     
function App() {
  const isDarkTheme = useTheme();
  const changeTheme = useThemeUpdate();

  return (
    <>
      <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme}>
        <GlobalStyles />
        <Container className="App">
          <button style={{position: 'absolute',top: 20, right: 20}} onClick={changeTheme}>Toggle theme</button>
          <CurrencyForm />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
