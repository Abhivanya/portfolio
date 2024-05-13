import React from "react";
import Heroimg2 from "../components/Heroimg2";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Heroimg2 heading="PORJECTS." text="Some of My Most Recent Work" />
      <WorkCard />
      <PricingCard />
    </div>
  );
};

export default Project;
