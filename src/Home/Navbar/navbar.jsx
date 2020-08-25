import React from "react";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <Navbar>
      <img className="nav-logo" src="/images/hubspot-logo.png" alt="" />
      {/* <div className="nav-groups" style={{ float: "right" }}>
        <ul className="ul-groups" style={{}}>
          <li className="ul-group-li " style={{ display: "inline" }}>
            Software
          </li>
          <li className="ul-group-li " style={{ display: "inline" }}>
            Pricing
          </li>
          <li className="ul-group-li " style={{ display: "inline" }}>
            Resources
          </li>
          <li className="ul-group-li " style={{ display: "inline" }}>
            Partners
          </li>
          <li className="ul-group-li " style={{ display: "inline" }}>
            About
          </li>
        </ul>
      </div> */}
    </Navbar>
  );
};

export default NavigationBar;
