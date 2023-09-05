import React from "react";
import "./slider.css";
import {GrFormPrevious} from "react-icons/gr"
import {GrFormNext} from "react-icons/gr"
import {RiDoubleQuotesL} from "react-icons/ri"
import {RiDoubleQuotesR} from "react-icons/ri"
const Reviews = () => {
  return (
    <div className="slider container">
      <div className="slider">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
            <div className='reviewCard'>
          
   <div className="card-text">
    <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)"/> A responsive and interactive Todo List app with drag-and-drop functionality and CRUD operations. This app is built using React, Bootstrap, React Bootstrap, and Material-UI.
    <RiDoubleQuotesR fontSize={"2rem"}  color=" rgb(255,82,161)"/>
    </span>

   </div>
   <div>
    <button>Slignup</button>
   </div>
         
    </div>
            </div>
            <div class="carousel-item">
            <div className='reviewCard'>
          

          <span> A responsive and interactive Todo List app with drag-and-drop functionality and CRUD operations. This app is built using React, Bootstrap, React Bootstrap, and Material-UI.

</span>
    </div>
            </div>
            <div class="carousel-item">
            <div className='reviewCard'>
          

          <span> A responsive and interactive Todo List app with drag-and-drop functionality and CRUD operations. This app is built using React, Bootstrap, React Bootstrap, and Material-UI.

</span>
    </div>
            </div>
          </div>
          <button
            class="carousel-control-prev text-dark"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
           
           <span className="fs-1"><GrFormPrevious/></span>
          </button>
          <button
            class="carousel-control-next  text-dark"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
           
            <span className="fs-1"><GrFormNext/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
