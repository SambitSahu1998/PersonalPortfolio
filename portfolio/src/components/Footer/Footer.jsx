import React from "react";
import "./Footer.css";
import footerLogo from '../../assets/newLogo.png';
import userInput from '../../assets/user.png';
import AnchorLink from "react-anchor-link-smooth-scroll";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footerLogo} alt=""/>
            <p>I am a MERN Stack developer, from Republic of India with 1 year of experience in companies like Yovant Labs and Thoughtspheres.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={userInput} alt=""/>
                <input type="email" placeholder="Enter Your Email"/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            © 2024 Sambit Kumar Sahu. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
