import React from "react";
import "./Services.css";
import SambitLogo from "../../assets/SambitLogo.png";
import Services_Data from "../../assets/services_data";
import rightIcons from "../../assets/iconsArrowRight.png"

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={SambitLogo} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h4>{service.s_no}</h4>
              <h3>{service.s_name}</h3>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={rightIcons} alt="Read More" className="services-rightIcons"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
