import React, { useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import F from './components/F/F';
import Fluid from 'webgl-fluid';

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    if (c) {
      Fluid(c);
    }
  }, []);

  return (
    <div className="app">
      <canvas ref={canvas} className="background-canvas" >
      
      
      <Navbar />
      <Header />
      <Hero />
      <Home />
      <Footer />
      <F />
      </canvas>
    </div>
  );
}

export default App;
