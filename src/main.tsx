import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js'
import { ThemeProvider } from 'styled-components'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
