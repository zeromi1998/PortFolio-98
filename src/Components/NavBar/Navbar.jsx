import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./styles.css";
import { FaHamburger, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navObj = [
    { indx: 0, name: "About", path: "/#about" },
    { indx: 1, name: "Experince", path: "/#experience" },
    { indx: 2, name: "Project", path: "/#projects" },
    { indx: 3, name: "Contact", path: "/#contact" },
    { indx: 4, name: "", path: "" },
  ];
  // *******************  Imp after designing websiet create new array of object amd your skill
  // *****     and use map to display data instead of using same component

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const closeSidenavbar = () => {
    setShowNavbar(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo"></div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <FaHamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <div className="showback">
              <FaArrowRight onClick={closeSidenavbar} />
            </div>
            <ul>
              {navObj.map((data) => {
                // console.log("this si naabr data",data)
                return (
                  <li key={data.indx}>
                    <HashLink  smooth to={data.path}>{data.name}</HashLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
