import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <div className="navLeft">
        <p className="logoText">EDYODA</p>

        <div className="navLeftSelect">
          <p>Cources</p>
          <img src="down.svg" alt="" />
        </div>
        <div className="navLeftSelect">
          <p>Programs</p>
          <img src="down.svg" alt="" />
        </div>
      </div>
      <div className="navRight">
        <img src="search.svg" alt="" />
        <p>Log in</p>
        <button className="joinBtn">JOIN NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;
