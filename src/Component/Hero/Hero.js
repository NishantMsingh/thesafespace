import classes from "./Hero.css";
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="row d-flex align-items-center justify-content-center hero">
        <div className="col-lg-5 col-md-5 col-sm-10 mt-4">
          <span className="text-primary bold">WHO WE ARE</span>
          <h3 className="brand">
            Welcome to <span className="font-size-brand">XYG</span>
          </h3>
          <p className="mt-1 roboto">
            Since 2012, XYG has proudly provided a practical, dependable, HIPAA
            secure medical answering service that’s used by thousands of
            practices nationwide.
          </p>{" "}
          <p className="mt-1 roboto">
            Since 2012, XYG has proudly provided a practical, dependable, HIPAA
            secure medical answering service that’s used by thousands of
            practices nationwide.
          </p>
          <button className="hero-enquiry "> Enquiry now</button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-10 mt-4">
          My experience enables me to offer effective outpatient,
          individualized, psychological care. I am trained to manage a number of
          mental health disorders, and provide a safe space to children,
          adolescents, adults, families, and couples via psychotherapy
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
