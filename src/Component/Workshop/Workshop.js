import React from "react";
import "./Workshop.css";
import WyChooseUs from "../WhyChooseUs/WyChooseUs";
import {BsWhatsapp} from "react-icons/bs";
const Workshop = () => {
  return (
    <div className="  container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3 className="brand title-workshop text-center">WORKSHOP AND TRANING PROGRAMS</h3>
      <button className="card-button bold">ENROLL NOW</button>

      <div className="text-start mt-4 w-70">
        <p>
          Our workshops and training programs are designed to empower your team
          with valuable psychological insights and tools, fostering a positive
          work environment and enhancing overall productivity.
        </p>
        <h4 className="bold text-center">Our Approch</h4>
        <p>
          We believe that a harmonious workplace is essential for success. Our
          workshops are carefully crafted to address the unique dynamics of your
          team, fostering better communication, resilience, and teamwork. By
          exploring psychological principles and practical strategies, we
          empower your employees to navigate challenges, reduce stress, and
          thrive both personally and professionally.
        </p>
      </div>
      <WyChooseUs/>
      <a className="whatapp-btn" href="https://wa.me/917904730572"><BsWhatsapp fontSize={'2rem'} color={"#4CC459"}/><span className="ms-1 text-center">CONTACT US</span></a>
    </div>
  );
};

export default Workshop;
