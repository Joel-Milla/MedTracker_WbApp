// External libraries of react
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import external libarries for use of redux
import { Provider } from 'react-redux'; // Connect redux with react
import { store } from './state/store.ts';
// `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
// Components
import App from './App.tsx'
// Import styles
import './output.css'
// Theme for MUI
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='light'>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
