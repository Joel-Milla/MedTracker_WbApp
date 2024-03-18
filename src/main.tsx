// External libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
// `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
// Components
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='light'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
