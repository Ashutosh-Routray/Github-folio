import React from "react";
import logo from "../logo.svg";
import "./Footer.css";

// CHANGE LOGO

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <img src={logo} alt="logo" />
          &#169; 2022 Zoreg, Inc.
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="./">Contact Me</a>
            </li>
            <li>
              <a href="./">Blog</a>
            </li>
            <li>
              <a href="./">About</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
