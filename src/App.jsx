import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<div className="pt-32 text-center text-zinc-500">Coming Soon</div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-black selection:bg-blue-500/30 selection:text-blue-100">
        {/* Cinematic Vignette */}
        <div className="bg-cinematic" />

        <Navbar />

        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Contact />
      </div>
    </Router>
  );
}

export default App;
