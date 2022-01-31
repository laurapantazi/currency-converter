import CurrencyForm from '../CurrencyForm/CurrencyForm';
import {Container} from '../../styles/Container.styled';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import { ThemeMode } from '../../context/theme/ThemeMode';
import { useThemeModeContext } from "../../context/theme/ThemeModeContext";
     
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
