import React, { useState } from "react";
import { MdReorder } from "react-icons/md";
import "./navbar.css";

export const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);


  return (
    <div>
      <div className='header' id={expandNavbar ? "open" : "close"}>
        
        <div className="container">
        <a href="#home" className="logo">
          Mind's Eye
        </a>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <MdReorder />
          </button>
        </div>
          <ul className="main-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#values">Values</a>
            </li>
            <li>
              <a href="#goals">Goals</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
