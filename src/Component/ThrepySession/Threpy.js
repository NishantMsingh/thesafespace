import React from 'react'
import "./Threpy.css"
import { Link } from 'react-router-dom'
const Threpy = () => {
  return (
    <div className='  container mt-5 mb-5 p-5 d-flex align-items-center justify-content-center flex-column'>
      <h1 className='brand title-threpy'>Book Threpy Session with Us</h1>
      <nav aria-label="breadcrumb fs-6">
      <ol class="breadcrumb">
      <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
      <li class="breadcrumb-item active" aria-current="page">Book Threpy Session</li>
     </ol>
</nav>
    </div>
  )
}

export default Threpy
