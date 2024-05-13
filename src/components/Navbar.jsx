import React from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? `${Style.headerBg}` : undefined}>
      <Link to="/" className={Style.logo}>
        <h1>Portfolio</h1>
      </Link>
      <ul
        className={
          menuClick ? `${Style.navMenu}  ${Style.active}` : `${Style.navMenu}`
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/porject">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <div className={Style.bars} onClick={() => setMenuClick(!menuClick)}>
        {menuClick ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
