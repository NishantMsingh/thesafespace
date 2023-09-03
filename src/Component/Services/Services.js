
import "./Services.css";
import workshop from "../../Assets/Images/workshop.JPG";
import thereptSession from "../../Assets/Images/thereptSession.JPG";
import Training from "../../Assets/Images//training.png"
import { Link } from "react-router-dom";

const Services = () => {
  return (
  
    <section id="services" className="text-center mt-5">
         <span className="brand shadow rounded pt-1 pb-1 ps-3 pe-3 select fs-3">
          Services
          </span>
        <div className="d-flex flex-wrap align-items-center justify-content-center mt-5 mb-5 gap-5">
        <div class="card mx-hight" style={{width:" 20rem" }}>
  <img src={thereptSession} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>BOOK A THERAPY SESSION WITH US</h5>
  
    <Link to="/Threpy"> <button className="card-button bold">BOOK NOW</button> </Link>

  </div>
</div> 
<div class="card mx-hight" style={{width:" 20rem"}}>
  <img src={Training} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>EXPLORE OUR TRAINING / CERTIFICATION PROGRAMS</h5>
  
    <Link to="/Training"> <button className="card-button bold">ENROLL NOW</button> </Link>
  </div>
</div> 
<div class="card mx-hight" style={{width:" 20rem"}}>
  <img src={workshop} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>CONTACT US FOR CORPORATE WORKSHOPS & TRAINING</h5>
  
    <Link to="/WorkShop"> <button className="card-button bold">CONTACT US</button> </Link>
  </div>
</div>


        </div>
    </section>
  );
};

export default Services;
