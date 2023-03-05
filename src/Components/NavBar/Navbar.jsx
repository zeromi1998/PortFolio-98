import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import mountainImg from "../../assets/mountain.svg";
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

const Navbar = () => {
  const navObj = [
    { indx: 0, name: "About", path:"" },
    { indx: 1, name: "Experince", path:"" },
    { indx: 2, name: "Project", path:"" },
    { indx: 0, name: "Contact", path:"" },
  ];
  // *******************  Imp after designing websiet create new array of object amd your skill
  // *****     and use map to display data instead of using same component
  return (
    <>
     <nav>
      <ul>
        {navObj.map((data)=>{
          return (
            <li className="navbar-list">{data.name}</li>
          )
        })}
      </ul>
      </nav>
    </>
  );
};

export default Navbar;
