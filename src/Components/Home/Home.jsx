import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar from "../NavBar/Navbar";
import airImg from "../../assets/air.png";
import techImg from "../../assets/tech.svg";
import profileImg from "../../assets/profile.jpg";
import TimelineBar from "../Timline/Timeline";
import javascriptImg from "../../assets/javascript.svg";
import reactImg from "../../assets/reactjs.png";
import nodeImg from "../../assets/nodejs.svg";
import pythonImg from "../../assets/python.svg";
import linuxImg from "../../assets/linux.png";
import gitImg from "../../assets/git.svg";
import gitHubImg from "../../assets/github.svg";
import linkdinImg from "../../assets/linkdin.svg";
const Home = () => {
  const skillObj = [
    { indx: 0, name: "JavaScript", pic: javascriptImg },
    { indx: 1, name: "React.js", pic: reactImg },
    { indx: 2, name: "Node.js", pic: nodeImg },
    { indx: 3, name: "Python", pic: pythonImg },
    { indx: 4, name: "Linux", pic: linuxImg },
    { indx: 5, name: "Git", pic: gitImg },
  ];
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
              I have a strong skillset in React.js, Node.js, HTML, and CSS, and
              I enjoy using my knowledge to bring new ideas to life.
            </h4>
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
