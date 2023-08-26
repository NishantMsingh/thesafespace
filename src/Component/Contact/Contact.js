
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
          <div class="col-lg-10 col-md-10 col-sm-10 text-center">
            <h2 className=" bold brand ">Contact With Us</h2>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row align-items-center justify-content-center mt-3 pb-2">
                <span className="contact-circle">
                  <MdCall color={"white"} fontSize={"3rem"} />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold">Phone</h4>
                  <span className="slate bold">+91-6209220442</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start pt-2 pb-2">
                <span className="contact-circle">
                  <LuMail color={"white"} fontSize={"3rem"} />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold">Mail</h4>
                  <span className="slate bold">
                    nishantkumarsingh16019@gmail.com
                  </span>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-start pt-2 pb-2">
                <span className="contact-circle">
                  <TfiLocationPin color={"white"} fontSize={"3rem"} />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold">Address</h4>
                  <span className="slate bold">70052,kolkata, India</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;