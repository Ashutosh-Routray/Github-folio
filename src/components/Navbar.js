import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faBookOpen,
  faProjectDiagram,
  faBoxArchive,
  faCaretDown,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos, fetchUsers } from "../app/user/userSlice";

export default function Navbar(props) {
  const user = useSelector((state) => state.user);
  // const [isActive, setIsActive] = React.useState(true);

  return (
    <>
      <nav className="main-nav">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          Ashutosh Routray
          {/* <li>Pulls</li>
          <li>Issues</li>
          <li>Codespaces</li>
          <li>Marketplace</li>
          <li>Explore</li> */}
        </ul>
        <FontAwesomeIcon
          className="notifications"
          icon={faBell}
        ></FontAwesomeIcon>
        <div className="more">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
        {user.user.avatar_url && (
          <div className="photo-drop-down">
            <img src={user.user.avatar_url} alt="avatar" />
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </div>
        )}
      </nav>
      <nav className="secondary-nav">
        <div className="container">
          <ul>
            {/* <li>
              <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              Overview
            </li> */}
            <li
              className={props.isRepo ? "active" : ""}
              onClick={() => props.setIsRepo(true)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Repositories{" "}
              {user.userRepos.length ? (
                <span className="numberOfRepositories">
                  {user.userRepos.length}
                </span>
              ) : null}
            </li>
            <li
              className={!props.isRepo ? "active" : ""}
              onClick={() => props.setIsRepo(false)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
              Coding Profiles
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
