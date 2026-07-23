import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import PillarDetail from './pages/PillarDetail'
import JoinDelegate from './pages/JoinDelegate'
import JoinTeam from './pages/JoinTeam'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-forest-950 text-offwhite flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#0B2118',
            color: '#F5F5F0',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          },
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pillars/:id" element={<PillarDetail />} />
          <Route path="/join/delegate" element={<JoinDelegate />} />
          <Route path="/join/team" element={<JoinTeam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App