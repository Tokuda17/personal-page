import React from "react";
import "./Experience.css";
import MT from "../images/MT.png";

function Experience({ title, description, date, index }) {
  return (
    <>
      <img src={MT} className="experience-logo"></img>
      <div
        className={`experience-container ${index % 2 === 0 ? "left" : "right"}`}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </>
  );
}

export default Experience;
