import React from "react";
import { Link } from "react-router-dom";
import Style from "./PricingCard.module.css";

const PricingCard = () => {
  const pricing = [
    {
      category: "Basic",
      days: "3 Days",
      pages: " 3 Pages",
      price: 100,
    },
    {
      category: "Premium",
      days: "2 Days",
      pages: " 5 Pages",
      price: 200,
    },
    {
      category: "Business",
      days: "5 Days",
      pages: " 8 Pages",
      price: 400,
    },
  ];

  return (
    <div className={Style.pricing}>
      <div className={Style.cardContainer}>
        {pricing.map((item, index) => (
          <div className={Style.card} key={index}>
            <h3>- {item.category} -</h3>
            <span className={Style.bar}></span>
            <p className={Style.btc}>$ {item.price}</p>
            <p>- {item.days} -</p>
            <p>- {item.pages} -</p>
            <p>- Featured -</p>
            <p>- Responsive Desgin -</p>
            <Link to="/contact" className={Style.btn}>
              Purchase Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
