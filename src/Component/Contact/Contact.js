
import React, { useRef } from "react";
import "./Contact.css";
import { TfiLocationPin } from "react-icons/tfi";
import { LuMail } from "react-icons/lu";
import { MdCall } from "react-icons/md";
const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const ContactFormhandler = (event) => {
    event.preventDefault();
    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    console.log(obj);
    alert("Thank you for contacting us! We will get back to you soon.");
  };
  return (
    <div
      id="contact"
      className="contaier-fluid pb-4  pt-4 mt-5  contact cardcontact pt-5 pb-5"
    >
      <div className="container">
        <div class="row justify-content-center align-items-start g-2">
          <div class="col-lg-5 col-md-10 col-sm-10 text-start">
            {/* <span className="brand shadow rounded pt-1 pb-1 ps-3 pe-3 select fs-3">Contact With Us</span> */}
            <div className="d-flex flex-column">
              <div className="d-flex flex-row align-items-center justify-content-start mt-3 pb-2">
                <span className="contact-circle">
                  <MdCall color={"white"}  />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold text-start">Phone</h4>
                  <span className="slate bold">+91-7904730572</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start pt-2 pb-2">
                <span className="contact-circle">
                  <LuMail color={"white"}  />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold text-start">Mail</h4>
                  <span className="slate bold">nishant@gmail.com</span>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-start pt-2 pb-2">
                <span className="contact-circle">
                  <TfiLocationPin color={"white"}  />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold text-start">Address</h4>
                  <span className="slate bold">Middleton Street Egmore - 600008, Chennai</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10 col-sm-10">
          <span className="brand shadow rounded pt-1 pb-1 ps-3 pe-3 select fs-3">Location</span>
          <hr/>
          <iframe
          title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235787.0481262719!2d88.36389500000001!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691065380227!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;