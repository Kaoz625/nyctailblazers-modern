import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogWalking from './pages/DogWalking'
import Websites from './pages/Websites'
import Apps from './pages/Apps'
import Agents from './pages/Agents'
import Contact from './pages/Contact'

function ScrollToTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fog">
      <Nav />
      <Routes>
        <Route path="/" element={<><ScrollToTop /><Home /></>} />
        <Route path="/dog-walking" element={<><ScrollToTop /><DogWalking /></>} />
        <Route path="/websites" element={<><ScrollToTop /><Websites /></>} />
        <Route path="/apps" element={<><ScrollToTop /><Apps /></>} />
        <Route path="/agents" element={<><ScrollToTop /><Agents /></>} />
        <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
      </Routes>
      <Footer />
    </div>
  )
}
