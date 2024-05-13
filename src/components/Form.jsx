import React from "react";
import Style from "./Form.module.css";

const Form = () => {
  return (
    <div className={Style.form}>
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Typr your Message Here" />
        <button className={Style.btn}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
