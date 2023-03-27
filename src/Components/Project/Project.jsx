import React from "react";
import "./styles.css";
import gitHubImg from "../../assets/github.svg";
const Projects = () => {
  const projectObj = [
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "React,Node",
    },
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "React,Node",
    },
    {
      name: "abc",
      desc: "about the project",
      techStack: "React,Node",
    },
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "React,Node",
    },
  ];
  return (
    <div id="projects">
      <h2 className="project-header">Projects</h2>
      <div className="project-tile">
        {projectObj.map((data, indx) => {
          return (
            <div className="box-grid" key={indx}>
              <h2>{data.name}</h2>
              <h3>{data.techStack}</h3>
              <p>{data.desc}</p>
              <div className="gitLogo">
                <a href="https://github.com/zeromi1998" target="_blanck">
                  <img src={gitHubImg} alt="gitImg" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Projects;
