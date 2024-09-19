import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/css/Footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maint />
  </StrictMode>,
)
