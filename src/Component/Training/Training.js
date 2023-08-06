import React from 'react'
import "./Training.css"
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <div className='  container mt-5 mb-5 p-5 d-flex align-items-center justify-content-center flex-column'>
    <h1 className='brand title-threpy'>Certified Training Program</h1>
    <nav aria-label="breadcrumb fs-6">
    <ol class="breadcrumb">
    <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
    <li class="breadcrumb-item active" aria-current="page">Training</li>
   </ol>
</nav>
  </div>
  )
}

export default Training
