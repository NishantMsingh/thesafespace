// Header.js
import React, { useState } from 'react';
import './Header.css';
import { CgMenuRight } from 'react-icons/cg';
import brandlogo from "../../Assets/Images/Design.png";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
   
    if(window.innerWidth<=844)
    {
      setMenu(!menu);
    }
  };

  return (
    <header className="header-sticky">
  
  <a class="navbar-brand" href="/" title='The safe place'>
    <img src={brandlogo}  class="d-inline-block  brandimg" alt="The safe place"/>
     <span className='brand1 pos-rel'>  THE SAFE PLACE</span>
  </a>
     
    <div>
      <nav className={menu ? 'heigh' : ''}>
      <span> <a className='anchor' href='#hero' onClick={menuHandler}>HOME</a></span>
      <span><a className='anchor' href='#services' onClick={menuHandler}>SERVICES</a></span>
      <span><a className='anchor' href='#contact' onClick={menuHandler}>CONTACT US</a></span>
      <span><a className='anchor' href='#services' onClick={menuHandler}>TRAINING</a></span>
  
    </nav>
  </div>
     <div> 
    
     
      <span className="header-burger">
        <CgMenuRight fontSize="2rem" color="black" onClick={menuHandler} />
      </span>
   </div>
     
     
    </header>
  );
};

export default Header;
