import React from 'react';
import './App.css';

import Header2 from '../Login/components/admin/Headerblue';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Slider from './components/Slider';
import Journey from './components/Journey';
import Team from './components/Team';
import ChooseUs from './components/ChooseUs';
import Box from './components/Box';
import Footer from '../Home/components/Footer';


function App() {
  return (
    <div className="App">
     
      <Header2/>
      <Hero />
      <About />
      <Vision />
      <Slider />
      <Journey />
      <Team />
      <ChooseUs />
      <Box/>
      <Footer/>
     
     
    
    </div>
  );
}

export default App;
