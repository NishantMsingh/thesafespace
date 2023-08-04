import "./Services.css";
import img1 from "../../Assets/Images//appoint.jpg"
import img2 from "../../Assets/Images//train.jpg"

const Services = () => {
  return (
    <section id="hero" className="text-center mt-5">
         <span className="brand shadow rounded p-1">
            What we do
          </span>
      <div className="row container d-flex align-items-center justify-content-center services">
     
        <div className= " cardbg col-lg-3 col-md-4 text-start col-sm-8 mt-4 rounded border-1 shadow ms-3 pt-2 pb-2 ps-2 pe-2 max-height">
            <img src={img1} alt='Appointment' className="img-fluid rounded"/>
            <h5 className="heading">Book therepy session with us</h5>
            lorem2Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           <br/> <button type="button" class="card-button bold">Book now</button>
            
        </div>
        <div className=" cardbg col-lg-3 col-md-4  text-start col-sm-8 mt-4 rounded border-1 shadow ms-3 pt-2 pb-2 ps-2 pe-2 max-height">
        <img src={img2} alt='Appointment' className="img-fluid rounded"/>
        <h5 className="heading">Explore our training/certification program</h5>
            lorem2Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          <br/>  <button type="button" class="card-button bold">Enroll now</button>
            
        </div>
        <div className="cardbg col-lg-3 col-md-4  text-start col-sm-8 mt-4 rounded border-1 shadow ms-3 pt-2 pb-2 ps-2 pe-2 max-height">
        <img src={img1} alt='Appointment' className="img-fluid rounded"/>
        <h5 className="heading">Contact us for corporate workshops & Training</h5>
            lorem2Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br/>  <button type="button" class="card-button bold">Enquiry now</button>
            

        </div>
        
      </div>
    </section>
  );
};

export default Services;
