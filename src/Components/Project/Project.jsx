import React from "react";
import "./styles.css";
import gitHubImg from "../../assets/github.svg";
import smoothie from "../../assets/smoothie.jpg";
import chatImag from "../../assets/chat.png";
const Projects = () => {

  const projectObj = [
    {
      name: "Smoothie Recipes App",
      desc: "Smoothie Recipes App where you can create  your own recipe and view others created recipe",
      techStack: "React,Node.js,Typescript",
      link: "https://smoothie-receipe-app.vercel.app/",
      img: smoothie,
    },
    {
      name: "Chat Applicaton",
      desc: "Allow you to stay connected with other people who may be using the application even on the other side of the world",
      techStack: "React,Node",
      link: "https://chat-app-gules-phi.vercel.app/",
      img: chatImag,
    },
    {
      name: "Git",
      desc: "Git Repository",
      techStack: "",
      link: "https://github.com/zeromi1998",
      img: gitHubImg,
    },
    // {
    //   name: "Nodejs Auth Application",
    //   desc: "Auth applicatoion for user to login with session management ",
    //   techStack: "React,Node",
    //   link: "https://github.com/zeromi1998",
    //   img: gitHubImg,
    // },
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
                <a href={data.link} target="_blanck">
                  <img className="projectImg" src={data.img} alt="projectImg" />
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
