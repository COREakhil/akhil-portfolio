import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li><a href='#home' onClick={() => setMenu("home")}>Home</a></li>
        <li><a href='#work' onClick={() => setMenu("work")}>Work</a></li>
        <li><a href='#services' onClick={() => setMenu("services")}>Services</a></li>
        <li><a href='#about' onClick={() => setMenu("about")}>About</a></li>
        <li><a href='#contact' onClick={() => setMenu("contact")}>Contact me</a></li>
      </ul>
      <div className='nav-connect' > <a href='#contact' onClick={() => setMenu("contact")} > Connect With Me</a></div>
    </div>
  );
}

export default Navbar;

