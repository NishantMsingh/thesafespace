import React from 'react'
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import WyChooseUs from '../WhyChooseUs/WyChooseUs';


const Home = () => {
  return (
    <div>
          <Hero/>
          <Services/>
          <WyChooseUs/>
          <Contact/>
    </div>
  )
}

export default Home
