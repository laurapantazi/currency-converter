import CurrencyForm from './components/CurrencyForm/CurrencyForm';
import {Container} from './Container';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeMode } from './ThemeMode';
import { useThemeModeContext } from "./ThemeModeContext";
     
function App() {
  var contextData = useThemeModeContext();

  return (
    <>
    <ThemeProvider theme={contextData.darkTheme? darkTheme : lightTheme}>
        <GlobalStyles />
        <Container className="App">
          <ThemeMode />
          <CurrencyForm />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
