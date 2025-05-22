import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AnimeProvider } from './context/AnimeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </BrowserRouter>
  </StrictMode>,
)
