import React from "react";
import "./RepoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import languagesColors from "../languagesColors.json";

export default function RepoCard(props) {
  return (
    <>
      <div className="repo-card">
        <div className="about-repo">
          <h2>
            <a href="./">{props.name}</a>{" "}
          </h2>
          <p className="repo-description">{props.description}</p>
          <div className="repo-data">
            <span>Updated on {props.updated_at}</span>
          </div>
        </div>
      </div>
    </>
  );
}
