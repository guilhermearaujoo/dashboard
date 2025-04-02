import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from 'styled-components'
import ResetStyles from '@/main/config/styles/reset'
import theme from '@/main/config/styles/theme'
import App from '@/App.tsx'

import { Provider } from 'react-redux'
import { store } from '@/presentation/state/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
