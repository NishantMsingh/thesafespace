import React from 'react'
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
// import ReviewSlider from "../Reviews/ReviewSlider";
import Reviews from '../Reviews/Reviews';



const Home = () => {
  const reviews = [
    {
      text: "Great product, I love it!",
      author: "John Doe",
    },
    {
      text: "Amazing service and quality.",
      author: "Jane Smith",
    },
    {
      text: "Highly recommended.",
      author: "Alice Johnson",
    },
    {
      text: "I can't live without it.",
      author: "Bob Brown",
    },
    {
      text: "Best purchase ever!",
      author: "Eva Wilson",
    },
  ];
  return (
    <div>
          <Hero/>
          <Services/>
          <Reviews />
            <Contact/>
    </div>
  )
}

export default Home
