import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navbar'
import MainContent from './components/main-content'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <MainContent/>
    <Footer/>
  </StrictMode>,
)
  