import React from 'react'
import "./Workshop.css"
import { Link } from 'react-router-dom';
const Workshop = () => {
  return (
    <div className='  container mt-5 mb-5 p-5 d-flex align-items-center justify-content-center flex-column'>
    <h1 className='brand title-threpy'>WORKSHOP AND TRANING PROGRAM</h1>
    <nav aria-label="breadcrumb fs-6">
    <ol class="breadcrumb">
    <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
    <li class="breadcrumb-item active" aria-current="page">workshop</li>
   </ol>
</nav>
  </div>
  )
}

export default Workshop
