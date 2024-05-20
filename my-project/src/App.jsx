import React, { useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import F from './components/F/F';


function App() {
  

  return (
    <div className="app">
      
      <Navbar />
      <Header />
      <Hero />
      <Home />
      <Footer />
      <F />
     
    </div>
  );
}

export default App;
