// External libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
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
          <App />
        </ThemeProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
