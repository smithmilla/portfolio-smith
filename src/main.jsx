import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navbar'
import MainContent from './components/main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <MainContent/>
  </StrictMode>,
)
  