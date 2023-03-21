import React from "react";
import "./styles.css";
const Projects = () => {
  const projectObj = [
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "react,node",
    },
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "react,node",
    },
    {
      name: "abc",
      desc: "about the project",
      techStack: "react,node",
    },
    {
      name: "Nodejs Auth Application",
      desc: "Auth applicatoion for user to login with session management ",
      techStack: "react,node",
    },
  ];
  return (
    <div id="projects">
    <h2 className="project-header">Projects</h2>
      <div className="project-tile" >
        {projectObj.map((data) => {
          console.log("data");
          return (
            <div className="box-grid">
              <h2>{data.name}</h2>
              <p>{data.techStack}</p>
              <p>{data.desc}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Projects;
