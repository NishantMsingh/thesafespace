import React from 'react'
import {MdWorkOutline} from "react-icons/md"
import {PiCurrencyInr} from "react-icons/pi"
import {TfiLocationPin} from "react-icons/tfi"
import {FiChevronRight} from "react-icons/fi"
import { Link } from 'react-router-dom';
const ThrepistCard = ({doctors}) => {
  return (
    <div class="threpist-card col-lg-5 col-md-10 col-sm-10 d-flex flex-www align-items-center justify-content-start p-6">
    <img
      src={doctors.pic}
      alt="Doctor"
      className="img-fluid rounded-50 w-30"
    />
    <div className=" text-start ms-3">
      <h1 className="brand fs-3">{doctors.name}</h1>
      <div className='dotted'> </div>
      <h6 className='d-flex flex-row align-items-center gap-2'> <span className='icon-body'><MdWorkOutline fontSize={"1.7rem"}/></span>{doctors.experience}</h6>
      <h6 className='d-flex flex-row align-items-center gap-2'> <span className='icon-body'><PiCurrencyInr fontSize={"1.7rem"}/></span>{doctors.price}</h6>
      <h6 className='d-flex flex-row align-items-center gap-2'> <span className='icon-body'><TfiLocationPin fontSize={"1.7rem"}/></span>{doctors.location}</h6>
      <button className='know-more d-flex flex-row align-items-center gap-2 justify-content-center'><span className='know-more-text'>Know more<FiChevronRight fontSize={"1.7rem"}/></span></button>
       

     
    </div>
  </div>
  )
}

export default ThrepistCard
