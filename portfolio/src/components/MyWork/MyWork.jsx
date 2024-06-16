import React from "react";
import "./MyWork.css";
import SambitLogo from "../../assets/SambitLogo.png";
import mywork_data from "../../assets/mywork_data.js";
import iconsArrowRight from "../../assets/iconsArrowRight.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h2>My Latest Work</h2>
        <img src={SambitLogo} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={index} src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <a
          href="https://github.com/SambitSahu1998"
          target="_blank"
          rel="noopener noreferrer"
          className="mywork-showmore-link"
        >
          <p>Show More</p>
          <img
            src={iconsArrowRight}
            alt="Show More"
            className="mywork-rightIcons"
          />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
