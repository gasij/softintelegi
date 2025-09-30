import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  useEffect(() => {
    // Prevent auto-scroll on page load
    window.scrollTo(0, 0);
    
    // Also prevent any hash-based scrolling
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    
    // Additional scroll prevention
    const preventScroll = (e) => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };
    
    // Listen for scroll events briefly after page load
    window.addEventListener('scroll', preventScroll, { passive: false });
    
    // Remove listener after a short delay
    setTimeout(() => {
      window.removeEventListener('scroll', preventScroll);
    }, 100);
  }, []);

  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
