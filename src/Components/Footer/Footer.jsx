import React from "react";
import gitHubImg from "../../assets/github.svg";
import linkdinImg from "../../assets/linkdin.svg";
import "./styles.css";
const Footer = () => {
  return (
    <div className="bottom-container" id="contact">
      <a target="_top" href="mailto:doshiprathamesh1998@gmail.com">
      <button class="button-87" role="button">CONTACT ME</button>

      </a>

      <a href="https://www.linkedin.com/in/prathamesh-doshi-a947a217b/" target="_blanck">
        {" "}
        <img src={linkdinImg} alt="linkdinImg" />
      </a>
      <a href="https://github.com/zeromi1998" target="_blanck">
        {" "}
        <img src={gitHubImg} alt="gitHubImg" />
      </a>
      <p>2023 Prathamesh Doshi</p>
    </div>
  );
};

export default Footer;
