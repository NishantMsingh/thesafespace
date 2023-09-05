import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";
import {BsWhatsapp} from "react-icons/bs"
const Training = () => {
  return (
    <div className="container mt-5 mb-5 p-3 d-flex align-items-center justify-content-center flex-column">
      <h6 className="brand title-training text-center">TRAINING/CERTIFICATION PROGRAMS</h6>
      <hr/>
      <nav aria-label="breadcrumb fs-6">
        <ol class="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Training
          </li>
        </ol>
      </nav>

      <div className="text-start mt-5 w-70">
        <h4 className="bold text-center brand">
          Counseling Psychology Training
        </h4>
        <p>
          Our Counseling Psychology Training program is designed for those
          seeking to become skilled and compassionate counselors. Through a
          blend of theoretical knowledge and hands-on practice, participants
          will learn the art of active listening, empathy, and effective
          communication. Whether you're pursuing a career in counseling or
          simply wish to enhance your interpersonal skills, this program equips
          you to make a meaningful impact.
        </p>
        <h4 className="bold text-center brand">Clinical Psychology Training</h4>
        <p>
          Delve into the depths of human behavior and mental health with our
          Clinical Psychology Training program. Gain a deep understanding of
          assessment, diagnosis, and evidence-based therapeutic interventions.
          From anxiety and depression to trauma and addiction, this program
          empowers you to support individuals on their journey to recovery and
          well-being.
        </p>

        <h4 className="bold text-center brand">
          Organizational Psychology Training
        </h4>
        <p>
          In the fast-paced world of today, effective leadership and team
          dynamics are crucial. Our Organizational Psychology Training program
          offers insights into human behavior within the workplace, helping you
          create a harmonious and productive environment. Learn to enhance team
          collaboration, manage conflicts, and foster employee well-being,
          ultimately contributing to a thriving organizational culture.
        </p>
      </div>

      <div className="text-start mt-5 w-70 ">
        <h1 className="bold text-center brand1  mx-auto">
          Why Choose Our Training Programs?
        </h1>
        <p>
          <span className="primary-pinki"> Experienced Faculty:</span> Our trainers bring
          a wealth of real-world experience and academic expertise, ensuring a
          comprehensive and insightful learning experience.{" "}
        </p>
        <p>
          {" "}
          <span className="primary-pinki"> Practical Application:</span>
          Our trainers bring a wealth of real-world experience and academic
          expertise, ensuring a comprehensive and insightful learning
          experience.
        </p>
        <p>
          {" "}
          <span className="primary-pinki"> Diverse Learning Paths:</span>
          Whether you're an aspiring psychologist, a professional seeking
          personal growth, or an organization aiming to optimize performance,
          our programs cater to various needs. Lifelong Impact: The skills and
          insights gained from our training programs have the potential to make
          a profound and lasting impact on individuals and organizations alike.{" "}
        </p>
        <h3 className="bold text-center brand  mx-auto">Enroll Today</h3>

        <p className="mt-3">
          Discover the world of psychology through our enriching and empowering
          training programs. Whether you're taking your first steps in the field
          or looking to enhance your existing skills, Training Programs offer a
          gateway to personal and professional transformation.
        </p>

        <button className="card-button bold">ENROLL NOW</button>
        <p className="mt-3">
          Contact us to learn more about program details, schedules, and how our
          training can benefit you or your organization.
        </p>
      </div>
 <div>
 <a className="whatapp-btn" href="https://wa.me/917904730572"><BsWhatsapp fontSize={'2rem'} color={"#4CC459"}/><span className="ms-1 text-center">CONTACT US</span></a>

 </div>
    </div>
  ); 
};

export default Training;
