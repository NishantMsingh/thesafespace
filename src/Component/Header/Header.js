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
    <header className="header-sticky">
      <div className="brand">
       <span> Xishant</span>
     </div>
      
      <div className='d-flex align-items-center justify-content-start flex-row'>
      <nav className={menu ? 'heigh' : ''}>
        <span> <a className='anchor' href='#hero' onClick={menuHandler}>Home</a></span>
        <span><a className='anchor' href='#About' onClick={menuHandler}>About</a></span>
        <span><a className='anchor' href='#Skills' onClick={menuHandler}>Skills</a></span>
    
      </nav>
        <span className="header-burger">
          <HiMenuAlt4 fontSize="2rem" color="black" onClick={menuHandler} />
        </span>
      </div>
    </header>
  );
};

export default Header;
