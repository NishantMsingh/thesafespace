// Header.js
import React, { useState } from 'react';
import './Header.css';
import { CgMenuRightAlt } from 'react-icons/cg';


const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
   
    if(window.innerWidth<=768)
    {
      setMenu(!menu);
    }
  };

  return (
    <div className='container'>
      <header className="header-absolute">
      <div className="brand">Muskan</div>
      <nav className={menu ? 'heigh' : ''}>
        <span> <a href='#hero' onClick={menuHandler}>Home</a></span>
        <span><a href='#About' onClick={menuHandler}>About</a></span>
        <span><a href='#Skills' onClick={menuHandler}>Skills</a></span>
        <span><a href='#Projects' onClick={menuHandler}>Projects</a></span>
        
        <span><a href='#Contact' onClick={menuHandler}>Contact</a></span>
      </nav>
      <div>
      
        <span className='header-burger'>
          <CgMenuRightAlt className="header-burger" fontSize="2rem" color="black" onClick={menuHandler} />
        </span>
      </div>
    </header>

    </div>
  );
};

export default Header;
