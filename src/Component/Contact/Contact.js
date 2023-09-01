
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
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1681.9283779158716!2d80.25853646440346!3d13.071213645513179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.070988999999999!2d80.259951!4m5!1s0x3a52660de1cefc27%3A0x3216e1cd36230db8!2sMiddleton%20St%2C%20Egmore%2C%20Chennai%2C%20Tamil%20Nadu%20600008!3m2!1d13.0715379!2d80.2599611!5e0!3m2!1sen!2sin!4v1693560550171!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1681.9283779158716!2d80.25853646440346!3d13.071213645513179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.070988999999999!2d80.259951!4m5!1s0x3a52660de1cefc27%3A0x3216e1cd36230db8!2sMiddleton%20St%2C%20Egmore%2C%20Chennai%2C%20Tamil%20Nadu%20600008!3m2!1d13.0715379!2d80.2599611!5e0!3m2!1sen!2sin!4v1693560550171!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;