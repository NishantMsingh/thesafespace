import React from "react";
import userimg from "../../Assets/Images/aboutimg.jpeg";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container mt-5 mb-5 pt-5 text-center">
     
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-lg-6 col-md-10 col-sm-10 d-flex flex-www align-items-center justify-content-start p-6">
          <img
            src={userimg}
            alt="Doctor"
            className="img-fluid rounded-50 w-40"
          />
          <div className="ms-1">
            <h1 className="brand">Muskaan Jaiswal</h1>
            <h6>Msc. Clinical Psychology</h6>
            <h6>PGD Expressive arts threpy, Xaviers</h6>
            <h6>Psychologist at barictric department,</h6>
            <h6>Apolo Hospital</h6>

           
          </div>
        </div>
        <div class="col-lg-6 col-md-10 col-sm-10 p-6 text-start">
          <p>
          <span className="brand">Y</span>our first step towards healing is just a click away. Book your
            session today, and let's embark on a journey towards a happier and
            healthier you. Whether you prefer in-person sessions or virtual
            appointments, we are here to accommodate your needs.
          </p>
          <p>
            My treatment focus is centered around your healing, exploration, and
            the illumination of your inner strengths.
          </p>
          <p>
            Using evidence-based techniques and a compassionate heart, I will
            work towards providing you a safe space tp help you navigate life's
            complexities and find clarity and resilience.
          </p>
          <Link to="/Threpy">
              {" "}
              <button className="card-button bold">BOOK NOW</button>{" "}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
