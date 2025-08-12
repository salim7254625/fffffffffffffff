// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './Compunent/ContextApi.jsx'


createRoot(document.getElementById('root')).render(
 
  <ContextApi>
    <App />
  </ContextApi>,
)
