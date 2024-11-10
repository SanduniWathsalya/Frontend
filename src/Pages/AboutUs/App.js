import React from 'react';
import './App.css';

import Header from '../Home/components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Journey from './components/Journey';
import Team from './components/Team';
import ChooseUs from './components/ChooseUs';
import Box from './components/Box';
import Footer from '../Home/components/Footer';


function App() {
  return (
    <div className="App">
     
      <Header/>
      <Hero />
      <About />
      <Vision />
      <Journey />
      <Team />
      <ChooseUs />
      <Box/>
      <Footer/>
     
     
    
    </div>
  );
}

export default App;
