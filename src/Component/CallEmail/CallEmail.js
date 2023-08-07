import React from 'react'
import "./CallEmail.css";
import {BiLogoWhatsapp} from "react-icons/bi";
const CallEmail = () => {
  return (
    <div className='container-fluid bg-light'>
        <div className='container'>
            <div class="row justify-content-end align-items-end g-2">
                <div class="col-lg-5 col-sm-10 col-md-5 me-2 p-2 d-flex justify-content-end">
                    <span className='ms-3 callemail pb-2'><a  className="anchor" href='mailto:nishantkumarsingh16019@gmail.com'>📧Email us</a></span>
                    <span className='ms-3 callemail pb-2'><a className="anchor" href="https://wa.me/916209220442"><BiLogoWhatsapp  color={"#4CC459"}/>Contact us</a></span>
                </div> 
             </div>
        </div>
    </div>
  )
}
export default CallEmail
