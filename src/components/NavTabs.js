import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className="heading">
      <img id="logo" src="./images/kdoh-logo.jpg" alt="logo" width="118px" height="118px" style={{float:"left"}}/>
      <br></br>
      <div id="headcontainer">
        <div id="titles">
          <h1 id="name">Kevin Doh</h1>
          <h2 id="title">Web Developer | UI/UX Design</h2>
        </div>
        <div id="nav">
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
