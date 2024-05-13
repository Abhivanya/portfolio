import Style from "./Heroimg.module.css";
import heroImg from "../assets/intro-bg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.wrapper}>
        <img className={Style.intoImg} src={heroImg} alt="Hero img" />
        <div className={Style.content}>
          <p>HI! I AM A FREELANCER</p>
          <h1>React Devloper.</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
