import "./Footer.css";
const Footer = () => {
  return (
    <section id="hero">
      <div className="row d-flex align-items-center justify-content-center footer bg-light">
        <div className="col-lg-10 col-md-10 col-sm-10 mt-4">
          <h2>Location</h2>
          <hr/>
          <iframe
          title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235787.0481262719!2d88.36389500000001!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691065380227!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
     
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
   
      <p>&copy; 2023 XYG. All rights reserved.</p>
    
      </div>
    </section>
  );
};

export default Footer;
