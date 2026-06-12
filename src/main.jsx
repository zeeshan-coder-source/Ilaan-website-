import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { NavigationProvider } from './context/NavigationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Ilaan">
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </BrowserRouter>
  </StrictMode>,
)
