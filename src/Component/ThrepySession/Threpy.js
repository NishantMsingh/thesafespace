import React from 'react'
import "./Threpy.css"

import ThrepistList from './ThrepistList';

const Threpy = () => {
  return (
    <div className='container-fluid'>
    <div className="d-flex align-items-center justify-content-center p-5"> <span className=' brand shadow rounded pt-1 pb-1 ps-3 pe-3 select fs-3'> Book the threpy session with us </span>  </div>
    <ThrepistList/>
    </div>



  
  )
}

export default Threpy
