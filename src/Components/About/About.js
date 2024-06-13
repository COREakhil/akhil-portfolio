import React from 'react'
import './About.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/about_profile.svg';
// import akhil from '../../assets/akhil.jpeg';

const About = () => {
  return (

    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
            {/* <img src={akhil} alt="" /> */}
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am on experienced Frontend Developer with over a decade of professional expertise in the field.Throughout my career, I have had the privilege of collavorating with prestigeous organizations, contributing to their success and growth</p>
                <p>My passion for frontend development is not only reflected my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
            </div>
            <div className="about-skills">
               
                    {/* <div className="about-skill"><p>SQL<hr style={{width:"75%"}}/>75%</p></div> */}
                    <div className="about-skill"><p>HTML<hr style={{width:"75%"}}/>75%</p></div>
                    <div className="about-skill"><p>CSS<hr style={{width:"70%"}}/>70%</p></div>
                    <div className="about-skill"><p>JavaScript<hr style={{width:"60%"}}/>60%</p></div>
                    <div className="about-skill"><p>React JS<hr style={{width:"50%"}}/>50%</p></div>
            
            </div>

          <div className="about-achivements">
            <div className="about-achivement">
              <h1>2.9+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="about-achivement">
              <h1>3+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default About