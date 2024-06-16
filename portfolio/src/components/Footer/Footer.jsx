import React, { useState } from "react";
import "./Footer.css";
import footerLogo from '../../assets/newLogo.png';
import userInput from '../../assets/user.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useSnackbar} from "notistack";

const Footer = () => {
  const {enqueueSnackbar} = useSnackbar();
  const [email,setEmail] = useState("");

  const handleInputChange = (e) =>{
    setEmail(e.target.value);
  }

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      enqueueSnackbar("Please enter a valid email address.", { variant: "error" });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", "New subscriber");
      formData.append("access_key", "c7801a6e-86f2-4280-bf98-1e2a6a704aeb");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        enqueueSnackbar("Subscribed successfully!", { variant: "success" });
        setEmail("");
      } else {
        enqueueSnackbar(res.message, { variant: "error" });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      enqueueSnackbar("Failed to subscribe. Please try again later.", { variant: "error" });
    }
  };

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
                <input type="email" placeholder="Enter Your Email" value={email} onChange={handleInputChange}/>
            </div>
            <div className="footer-subscribe" onClick={handleSubscribe}>
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
            <p><a href="https://www.termsfeed.com/live/daac35bd-18c2-43c6-abe4-f53ad8d6ca12/" target="_blank" rel="noopener noreferrer">Term of Service</a></p>
            <p><a href="https://www.termsfeed.com/live/2f3bb83b-6250-482f-b716-bdfacc2c6959/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
            <p><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
