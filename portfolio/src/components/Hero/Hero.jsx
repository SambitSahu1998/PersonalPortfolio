import React from "react";
import "./Hero.css";
import myImage from "../../assets/whiteBackgroundPhoto.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={myImage} alt="" className="my-image" />
      <h2>
        <span>I'm Sambit Kumar Sahu,</span> MERN stack developer based in
        Republic of India.
      </h2>
      <p>
        I am a MERN stack developer from Pune, Republic of India with 1 years of
        experience in multiple startup companies like Yovant Labs and
        Thoughtspheres.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1nNtrRLBl8qZoBnadNcVBAfzAaXDc6hz_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
