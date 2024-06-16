import React,{useRef} from "react";
import "./Contact.css";
import SambitLogo from "../../assets/SambitLogo.png";
import phoneIcons from "../../assets/phone.png";
import emailIcons from "../../assets/email.png";
import locationIcons from "../../assets/location.png";
import linkedInIcons from "../../assets/linkedIn.png";
import {useSnackbar} from "notistack";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      enqueueSnackbar("All fields are required. Please fill out all fields.",{variant:"error"});
      return;
    }

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
      enqueueSnackbar(res.message,{variant:"success"});if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      enqueueSnackbar(res.message, {
        variant: "error",
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
        <img src={SambitLogo} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailIcons} alt="" />
              <p>sambitkumarsahuofficial@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneIcons} alt="" />
              <p>+91-8917-386107</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcons} alt="" />
              <p>Pune, Republic of India</p>
            </div>
            <div className="contact-detail">
              <img src={linkedInIcons} alt="" />
              <p>linkedin.com/in/sambitkumarsahuofficial/</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
