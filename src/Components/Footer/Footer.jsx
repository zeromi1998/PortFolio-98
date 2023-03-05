import React from "react";
import gitHubImg from "../../assets/github.svg";
import linkdinImg from "../../assets/linkdin.svg";
import "./styles.css";
const Footer = () => {
  return (
    <>
      <div className="bottom-container">
        <a href="#">
          {" "}
          <img src={linkdinImg} alt="linkdinImg" />
        </a>
        <a href="#">
          {" "}
          <img src={gitHubImg} alt="gitHubImg" />
        </a>
        <p>2023 Prathamesh Doshi</p>
      </div>
    </>
  );
};


export default Footer;
