import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Logement from './pages/Fiche-logement'
import About from './pages/About'
import Footer from './components/Footer'
import "./style.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)