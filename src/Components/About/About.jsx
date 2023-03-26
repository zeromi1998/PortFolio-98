import React from "react";
import javascriptImg from "../../assets/javascript.svg";
import reactImg from "../../assets/reactjs.png";
import nodeImg from "../../assets/nodejs.svg";
import pythonImg from "../../assets/python.svg";
import linuxImg from "../../assets/linux.png";
import gitImg from "../../assets/git.svg";
import "./styles.css";
import gitHubImg from "../../assets/github.svg";
import linkdinImg from "../../assets/linkdin.svg";
const About = () => {
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
      <div className="middle-container" id="about">
        <div className="profile">
          {/* <img className="round-img" src={profileImg} alt="profile" /> */}
          <h2>About Me</h2>
          <p>
            My name is Pathamesh Doshi and I am a software engineer with a
            passion for developing innovative solutions. I have a BE in Computer
            Engineering from Pune University and I am skilled in technologies
            such as {" "} 
            <span>
               React.js, Node.js, Express.js, Git, Linux, Python, HTML, CSS.
            </span>
          </p>

          <p>
            I am driven by the desire to constantly improve and expand my skill
            set. In my free time, I enjoy playing chess and cricket which help
            me refresh my mind and approach problem-solving with a different
            perspective. My ultimate goal is to work on meaningful projects that
            have a positive impact on people's lives.
          </p>
        </div>
        <hr />
        <h2>Skills</h2>
        <div className="skills">
          {skillObj.map((data) => {
            return (
              <div key={data.indx} className="skill-row">
                <img src={data.pic} alt="JavaScript" />
                <h2>{data.name}</h2>
              </div>
            );
          })}
        </div>
        <hr />
        {/* <div className="contact-me">
          <h2>Get in touch</h2>
          <a href="mailto:prathameshdoshi0@gmail.com">CONTACT ME</a>
        </div> */}
      </div>
    </>
  );
};

export default About;
