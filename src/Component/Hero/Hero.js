import "./Hero.css";
import {IoIosArrowForward} from "react-icons/io";
import imageHero from "../../Assets/Images/doctor-5710153.jpg"
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="row d-flex align-items-center justify-content-center hero">
        <div className="col-lg-5 col-md-5 col-sm-10 mt-4">
          <h3 className="brand fs-1">
            Welcome 
          </h3>
          <p className="mt-1 roboto slate">
            At The Safe Space we believe in the transformative power of empathy,
            kindness, and vulnerability. This is your sanctuary, where judgment
            has no place, and authenticity is celebrated. Step into a world of
            compassion and understanding, where you are free to express your
            true self, without fear or reservation.
          </p>{" "}
          <p className="mt-1 roboto slate">
            Our mission is simple yet profound - to create a safe haven where
            hearts connect, and souls find solace. Here, you'll be embraced for
            who you are, and your journey towards healing and growth will be met
            with unwavering support.
          </p>
          <button className="hero-enquiry bold"> Enquiry now <IoIosArrowForward/></button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-10 mt-4">
     <img src={imageHero} alt='Hero' className="img-fluid rounded" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
