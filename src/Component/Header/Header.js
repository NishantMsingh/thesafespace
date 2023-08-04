// Header.js
import React, { useState } from 'react';
import './Header.css';
import { CgMenuRight } from 'react-icons/cg';


const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
   
    if(window.innerWidth<=768)
    {
      setMenu(!menu);
    }
  };

  return (
    <header className="header-sticky bg-light">
      <div className="brand">
       <span> THE SAFE PLACE</span>
     </div>
     <nav className={menu ? 'heigh' : ''}>
        <span> <a className='anchor' href='#hero' onClick={menuHandler}>HOME</a></span>
        <span><a className='anchor' href='#services' onClick={menuHandler}>SERVICES</a></span>
        <span><a className='anchor' href='#contact' onClick={menuHandler}>CONTACT US</a></span>
        <span><a className='anchor' href='#program' onClick={menuHandler}>TRAINING</a></span>
    
      </nav>
      <div className='d-flex align-items-center justify-content-start flex-row'>
      
        <span className="header-burger">
          <CgMenuRight fontSize="2rem" color="black" onClick={menuHandler} />
        </span>
      </div>
    </header>
  );
};

export default Header;
