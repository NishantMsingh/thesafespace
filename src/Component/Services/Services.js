
import "./Services.css";
import img1 from "../../Assets/Images//appoint.jpg"
import img2 from "../../Assets/Images//train.jpg"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="text-center mt-5">
         <span className="brand shadow rounded p-1">
            What we do
          </span>
        <div className="d-flex flex-wrap align-items-center justify-content-center mt-5 mb-5 gap-5">
        <div class="card" style={{width:" 20rem"}}>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>BOOK A THERAPY SESSION WITH US</h5>
  
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Threpy"> <button className="card-button bold">BOOK NOW</button> </Link>

  </div>
</div> 
<div class="card" style={{width:" 20rem"}}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>EXPLORE OUR TRAINING / CERTIFICATION PROGRAMS</h5>
  
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Training"> <button className="card-button bold">ENROLL NOW</button> </Link>
  </div>
</div> 
<div class="card" style={{width:" 20rem"}}>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body text-start">
    <h5>CONTACT US FOR CORPORATE WORKSHOPS & TRAINING</h5>
  
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/WorkShop"> <button className="card-button bold">CONTACT US</button> </Link>
  </div>
</div>


        </div>
    </section>
  );
};

export default Services;
