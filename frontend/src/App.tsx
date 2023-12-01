import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './context/AuthContext';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Routes';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
