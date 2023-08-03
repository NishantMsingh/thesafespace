import React from 'react'
import "./Main.css"
import CallEmail from './Component/CallEmail/CallEmail';
import Header from './Component/Header/Header';
import Hero from "./Component/Hero/Hero";
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div>
          <CallEmail/>
          <Header/>
          <Hero/>
          <Footer/>
          
    </div>
  )
}

export default App
