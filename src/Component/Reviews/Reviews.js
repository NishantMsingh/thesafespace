import React from "react";
import "./slider.css";
import { GrFormPrevious } from "react-icons/gr"
import { GrFormNext } from "react-icons/gr"
import { RiDoubleQuotesL } from "react-icons/ri"
import { RiDoubleQuotesR } from "react-icons/ri"
import { AiFillStar } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"

const Reviews = () => {
    return (
       <div className="container-fluid text-center mt-4 pt-5">  
         <span className="brand shadow rounded pt-1 pb-1 ps-3 pe-3 select fs-3 yellow  mb-5" >Testimonials</span>
         <div className="slider container">
           
           <div className="slider">
               <div
                   id="carouselExampleControlsNoTouching"
                   class="carousel slide"
                   data-bs-touch="false"
                   data-bs-interval="false"
               >
                   <div class="carousel-inner">

                       <div class="carousel-item active">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   I can't speak highly enough about the Clinical Psychology program. The mentors are not just knowledgeable but also incredibly supportive. The curriculum is well-structured, and the practical experience I gained during the program was invaluable. I now feel confident in my ability to go forward in the field. This program has opened doors to a fulfilling career.    <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Riya agarwal [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="carousel-item ">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   "This program has been a lifeline for me. The instructors are not just educators but mentors who genuinely care about your success. The emphasis on real-world applications, including role-play and practical experience, has been invaluable. I'm proud to say that this program has transformed me into a more confident individual with a lot more understanding about myself and the field"
                                   <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Simran meherwani [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="carousel-item ">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   This program has been a game-changer for me. The comprehensive approach to clinical psychology, including assessment and therapy techniques, has given me a solid foundation. What sets this program apart is the emphasis on ethics and cultural competence, which are crucial in our diverse world. I'm now better equipped with my understanding of this field.    <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Nandini  [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="carousel-item ">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   The Clinical Psychology program has exceeded my expectations. The mentors are not only experts in their fields but also passionate about teaching and mentoring. I appreciate the practical emphasis, with opportunities for supervised practice. I feel well-prepared to embark on my career as a clinical psychologist. This program has been worth every moment
                                   <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Darshini Shah [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="carousel-item ">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   The Counseling program has been an incredible journey of self-discovery and professional growth. The curriculum is rich and diverse, covering various counseling theories and techniques. The focus on communication and empathy skills has been particularly beneficial. I now feel ready to take my next step in this field.
                                   <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Vidhi prasad  [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="carousel-item ">
                           <div className='reviewCard'>


                               <span> <RiDoubleQuotesL fontSize={"2rem"} color=" rgb(255,82,161)" />
                                   I couldn't have chosen a better program for my counseling journey. The curriculum covers everything from basic counseling skills to specialized areas like trauma and diversity. I also appreciate the focus on self-care and well-being, which is often overlooked in other programs. I'm now well-prepared for a fulfilling career as a counselor, thanks to this program.
                                   <RiDoubleQuotesR fontSize={"2rem"} color=" rgb(255,82,161)" />
                               </span>
                               <div className="review-user">
                                   <span><FaUserCircle fontSize={"3rem"} color="rgb(255,82,161)" /></span>
                                   <div className="ms-2  text-start">
                                       <span className="stars">
                                           <AiFillStar color="rgb(255,82,161)" />
                                           <AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /><AiFillStar color="rgb(255,82,161)" /></span>
                                       <span className="name d-block">Yuvaraj [Student]</span>

                                   </div>
                               </div>
                           </div>
                       </div>

                   </div>
                   <button
                       class="carousel-control-prev text-dark"
                       type="button"
                       data-bs-target="#carouselExampleControlsNoTouching"
                       data-bs-slide="prev"
                   >

                       <span className="fs-1"><GrFormPrevious fontSize={"3rem"} opacity={".5"} /></span>
                   </button>
                   <button
                       class="carousel-control-next  text-dark"
                       type="button"
                       data-bs-target="#carouselExampleControlsNoTouching"
                       data-bs-slide="next"
                   >

                       <span className="fs-1"><GrFormNext fontSize={"3rem"} opacity={".5"} /></span>
                   </button>
               </div>
           </div>
       </div>
       </div>
    );
};

export default Reviews;
