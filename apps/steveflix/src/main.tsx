import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/inter';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import App from './app/app';

const theme = extendTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark" defaultColorScheme="dark" theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
