import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from 'styled-components'
import ResetStyles from '@/styles/reset'
import theme from '@/styles/theme'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
)
