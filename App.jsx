import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Strategy from './pages/Strategy'
import Campaigns from './pages/Campaigns'
import Automation from './pages/Automation'
import Grix from './pages/Grix'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/strategy"   element={<Strategy />} />
        <Route path="/campaigns"  element={<Campaigns />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/grix"       element={<Grix />} />
      </Routes>
      <Footer />
    </Router>
  )
}
