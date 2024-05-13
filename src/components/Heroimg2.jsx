import React from "react";
import Style from "./Heroimg2.module.css";

const Heroimg2 = ({ heading, text }) => {
  return (
    <div className={Style.heroImg}>
      <div className={Style.heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heroimg2;
