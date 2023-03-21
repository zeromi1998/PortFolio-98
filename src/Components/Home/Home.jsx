import React from "react";
import Cv from "../../assets/PrathameshResume.pdf";
import "./styles.css";
import Navbar from "../NavBar/Navbar";
import airImg from "../../assets/air.png";

const Home = () => {
  return (
    <>
      <div className="top-container">
        <Navbar />
        {/* <img  className="top-image" src={airImg} alt="airImage"/> */}

        <div class="grid-container">
          <div class="heading-cont ">
            {" "}
            <h3>Hello my name is ,</h3>
            <h1>Prathamesh Doshi.</h1>
            <h4>
              A passionate developer with a love for learning new technologies.
              I have a strong skillset in{" "}
              <span className="home-span"> React.js, Node.js, HTML,CSS </span>{" "}
              and I enjoy using my knowledge to bring new ideas to life.
            </h4>
            <a href={Cv} download="resume">
            <button class="resume" role="button">Resume</button>
            </a>
          </div>
          <div class="grid-item">
            {" "}
            <img className="middle-image-right" src={airImg} alt="airImg" />
          </div>
        </div>
        {/* <img className="bottom-image" src={mountainImg} alt="mountain" /> */}
      </div>
      <hr />
    </>
  );
};

export default Home;
