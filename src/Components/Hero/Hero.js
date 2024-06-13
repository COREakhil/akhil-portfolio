import React from 'react';
import './Hero.css';
import akhil from '../../assets/akhil.jpeg';


const Hero = ({ setMenu }) => {

  return (
    <div id='home' className='hero'>
         <img src={akhil} alt="" />
      <h1>I'm Akhil Sandupatla,  </h1>
      
      <h3>Frontend Developer.</h3>
      <p>I am a frontend developer from Pune, with 2.9 years of experience in multiple companies like Capgemini and vRhythms Technologies, Pune</p>
      <div className="hero-action">
        {/* <div id='contact' className='hero-connect' > <a href='#contact' onClick={() => setMenu("contact")} > Connect With Me</a> </div> */}
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;