import React from 'react';
import './About.css';
import profile_img from '../../assets/FullImage.png';
import SambitLogo from '../../assets/SambitLogo.png';

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h2>About Me</h2>
            <img src={SambitLogo} alt="NA"/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="NA" className="my-profile-image"/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Full Stack Developer with over a year of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with pretigious organizations, contributing to their success and growth.</p>
                    <p>My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div> 
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>SQL</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h2>1+</h2>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h2>3+</h2>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h2>2+</h2>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About;