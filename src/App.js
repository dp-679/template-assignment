
import React from 'react'
import './App.css';

import NavBar from './components/Navbar'
import HeroSection from './components/Herosection'
import FeatureSection from './components/Featuresection'
import CardSection from './components/Cardsection'
import FooterSection from './components/Footersection'

function App() {
  return (
    
    <div>
        <NavBar />
        
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />

    
    </div>
  );
  
}

export default App;