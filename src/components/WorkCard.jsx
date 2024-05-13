import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./WorkCard.module.css";
import pro1 from "../assets/pro1.jpeg";

const WorkCard = () => {
  return (
    <div className={Style.workContainer}>
      <h1 className={Style.heading}>Project</h1>
      <div className={Style.projectContainer}>
        <div className={Style.projectCard}>
          <img src={pro1} alt="img" />
          <h2 className={Style.projectTitle}>Project Titel</h2>
          <div className={Style.proDetails}>
            <p>This is a text</p>
            <div className={Style.proBtns}>
              <NavLink to="url.com" className={Style.btn}>
                View
              </NavLink>
              <NavLink to="urlofgithub.com" className={Style.btn}>
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
