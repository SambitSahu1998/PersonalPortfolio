import React, { useRef, useState } from "react";
import myLogo from "../../assets/newLogo.png";
import "./Navbar.css";
import underline from "../../assets/SambitLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import toggleIcons from "../../assets/hamburgerIcons.png";
import crossIcons from "../../assets/crossIcons.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef=useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-270px";
  }

  return (
    <div className="navbar">
      <img src={myLogo} alt="Not Available" className="logo-image" />
      <img src={toggleIcons} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={crossIcons} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
