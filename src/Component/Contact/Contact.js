import React from "react";
import "./Contact.css";
import { TfiLocationPin } from "react-icons/tfi";
import { LuMail } from "react-icons/lu";
import { MdCall } from "react-icons/md";
const Contact = () => {
  return (
    <div
      id="contact"
      className="contaier-fluid pb-4  pt-4 mt-5  contact cardcontact pt-5 pb-5"
    >
      <div className="container">
        <div class="row justify-content-center align-items-start g-2">
          <div class="col-lg-6 col-md-10 col-sm-10 text-start">
            <h2 className=" bold brand ">Contact With Us</h2>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row align-items-center justify-content-start mt-3 pb-2">
                <span className="contact-circle">
                  <MdCall color={"white"} fontSize={"2rem"} />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold">Phone</h4>
                  <span className="slate bold">+91-6209220442</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start pt-2 pb-2">
                <span className="contact-circle">
                  <LuMail color={"white"} fontSize={"2rem"} />
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
                  <TfiLocationPin color={"white"} fontSize={"2rem"} />
                </span>
                <div className="ps-2 pt-1">
                  <h4 className="bold">Address</h4>
                  <span className="slate bold">70052,kolkata, India</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-10 col-sm-10  pad-adjustment shadow text-start rounded">
            <h2 className="bold brand ">Doctent Form</h2>
            <div class="container">
              <form action="/action_page.php">
                <label for="fname" className="bold">
                  {" "}
                  Name
                </label>
                <input
                  type="text"
                  className="rounded"
                  id="name"
                  name="name"
                  placeholder="Your name.."
                />

                <label for="lname" className="bold">
                  Email
                </label>
                <input
                  type="email"
                  className="rounded"
                  id="lname"
                  name="lastname"
                  placeholder="Email..."
                />

                <br />
                <label for="subject" className="bold">
                  Message
                </label>
                <textarea
                  id="subject"
                  className="rounded"
                  name="subject"
                  placeholder="Leave your message.."
                  style={{ height: "100px" }}
                ></textarea>

                <input type="submit" value="Send Message" className="bold w-100" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
