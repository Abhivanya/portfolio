import React from "react";
import Style from "./AboutContent.module.css";
import { Link } from "react-router-dom";
import React1 from "../assets/React1.jpeg";
import React2 from "../assets/React2.jpeg";

const AboutContent = () => {
  return (
    <div className={Style.about}>
      <div className={Style.left}>
        <h1>Who Am I?</h1>
        <p>
          I am full-stack Devloper. i Create resposive, secure website for my
          Clients.
        </p>
        <Link to="/contact" className={Style.btn}>
          Contact
        </Link>
      </div>
      <div className={Style.right}>
        <div className={Style.imgContainer}>
          <div className={Style.imgStacTtop}>
            <img src={React1} alt="" className={Style.img} />
          </div>
          <div className={Style.imgStackBottom}>
            <img src={React2} alt="" className={Style.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
