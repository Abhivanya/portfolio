import React from "react";
import Style from "./Footer.module.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className={Style.footerContainer}>
        <div className={Style.left}>
          <div className={Style.location}>
            <FaHome size={20} style={{ color: "White", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society.</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className={Style.phone}>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "White", marginRight: "2rem" }}
              />
              1-2323-232-45
            </h4>
          </div>
          <div className={Style.email}>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "White", marginRight: "2rem" }}
              />
              sbzabhidhekyadav@gmail.com
            </h4>
          </div>
        </div>
        <div className={Style.right}>
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem sunt impedit dolorem cumque aliquam magni qui fuga
            assumenda sint dolorum.
          </p>
          <div className={Style.social}>
            <FaFacebook
              size={20}
              style={{ color: "White", marginRight: "1rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "White", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "White", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
