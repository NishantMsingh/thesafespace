import React from 'react'
import "./Main.css"
import CallEmail from './Component/CallEmail/CallEmail';
import Header from './Component/Header/Header';
import Hero from "./Component/Hero/Hero";
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import MouseFollower from './MouseFollower';

const App = () => {
  return (
    <div>
          <MouseFollower />
          <CallEmail/>
          <Header/>
          <Hero/>
          <Services/>
          <Contact/>
          <Footer/>
          
    </div>
  )
}

export default App
