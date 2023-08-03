import classes from './Hero.module.css';
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
const HeroSection = () => {
 
  return (
    <section id='hero' className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <div className={classes["flex-center"]}>
          <span className=" ">HELLO </span>
          <span className=" "> Web  Designer & Front-end Developer</span>
          <span className=" "> Passionate about changing the world with technology.
</span>
          <div className={classes.links}>
             <span className={classes["links-hero"]}> <a target='blank' href='https://www.linkedin.com/in/nishant-kumar-124595284/'><BiLogoLinkedin fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a target='blank' href='https://www.facebook.com/profile.php?id=100095054529905'><FaFacebookF fontSize={"1.5rem"}/></a></span>
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
