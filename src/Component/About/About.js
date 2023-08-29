import React from "react";
import "./About.css";
import { useParams } from "react-router-dom";
import {BsWhatsapp} from "react-icons/bs";
const About = () => {
  const { doctorsid } = useParams();
  let doctors=JSON.parse(localStorage.getItem("doctors"));
  return (
    <div className="container mt-5 mb-5 pt-5 text-center min-100">
     
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-lg-6 col-md-10 col-sm-10 d-flex flex-www align-items-center justify-content-start p-6">
          <img
            src={doctors.pic}
            alt="Doctor"
            className="img-fluid rounded-50 w-40"
          />
          <div className="ms-1 text-center">
            <h5 className="brand text-safe">{doctors.name}(She/Her)</h5>
            <h6></h6>
            <h6><span className="slate">{doctors.description}</span><span/></h6>
            <h6>Price : <span className="slate">{doctors.price}</span><span/></h6>
            <h6>Experience : <span className="slate">{doctors.experience}</span><span/></h6>
     
           

           
          </div>
        </div>
        <div class="col-lg-6 col-md-10 col-sm-10 p-6 text-start">
          <p>
          {doctors.brief}
          </p>
          
          <p>
          {doctors.specification}
          </p>
     
          
              <button className="card-button bold"><a href={`mailto:${doctors.email}`}>Email us</a>  </button>{" "}
            

            {doctorsid=="6209220442"?<a className="whatapp-btn-about" href="https://wa.me/916209220442"><BsWhatsapp fontSize={'1rem'} color={"#4CC459"}/><span className="ms-1 text-center">Whats'up us</span></a>:""}
        </div>
      </div>
    </div>
  );
};

export default About;
