import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/inter';
import { Provider } from 'react-redux';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import App from './app/app';
import { store } from './redux/store'; // import the store

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          '50': '#fce6e8',
          '100': '#faced0',
          '200': '#f59da1',
          '300': '#ef6b72',
          '400': '#ea3a43',
          '500': '#E50914',
          '600': '#b70710',
          '700': '#89050c',
          '800': '#5c0408',
          '900': '#2e0204',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <CssVarsProvider
        defaultMode="dark"
        defaultColorScheme="dark"
        theme={theme}
      >
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </Provider>
  </StrictMode>
);
