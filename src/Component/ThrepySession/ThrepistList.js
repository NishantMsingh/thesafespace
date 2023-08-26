import React from 'react'
import "./Threpist-list.css";
import ThrepistCard from "./ThrepistCard";
import About from "../About/About"
const ThrepistList = () => {
  return (
    <div className="container mt-5 mb-5 pt-5 text-center">
      <About/>
      <div class="row justify-content-center align-items-center g-2">
         <ThrepistCard/>
         <ThrepistCard/>
         <ThrepistCard/>
         <ThrepistCard/>
       
      </div>
    </div>
  )
}

export default ThrepistList
