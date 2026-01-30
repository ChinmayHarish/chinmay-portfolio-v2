import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Noise from './components/Noise';
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative bg-black selection:bg-blue-500/30 selection:text-blue-100">
        <Noise />
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
