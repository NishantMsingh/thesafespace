// Header.js
import React, { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';


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
        <span><a className='anchor' href='#About' onClick={menuHandler}>SERVICES</a></span>
        <span><a className='anchor' href='#Skills' onClick={menuHandler}>CONTACT US</a></span>
        <span><a className='anchor' href='#Skills' onClick={menuHandler}>TRAINING</a></span>
    
      </nav>
      <div className='d-flex align-items-center justify-content-start flex-row'>
      
        <span className="header-burger">
          <HiMenuAlt4 fontSize="2rem" color="black" onClick={menuHandler} />
        </span>
      </div>
    </header>
  );
};

export default Header;
