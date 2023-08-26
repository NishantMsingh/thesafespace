import React from 'react'
import "./Threpist-list.css";
import ThrepistCard from "./ThrepistCard";
import Doctors from "../../Assets/Doctors";
const ThrepistList = () => {
  return (
    <div className="container-fluid mt-5 mb-5 pt-5 text-center">
    
      <div class="row justify-content-center align-items-center g-2">

      {Doctors.map((val) => (
  <ThrepistCard doctors={val}  key={val.idphone}/>
))}


        
     
       
      </div>
    </div>
  )
}

export default ThrepistList
