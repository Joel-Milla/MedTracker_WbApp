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

// Import AuthProvider
import { AuthProvider } from './Authentication/AuthUser';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <NextUIProvider>
      <main className='light'>
        <ThemeProvider theme={theme}>
          {/* The provider is used so the store is available throughout the app */}
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </main>
    </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
)
