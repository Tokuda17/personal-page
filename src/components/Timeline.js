import React from "react";
import "./Timeline.css";
import Experience from "./Experience";

function Timeline({ experiences }) {
  return (
    <div className="timeline">
      {experiences.map((item, index) => (
        <div
          className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}
        >
          <Experience
            title={item.title}
            description={item.description}
            date={item.date}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default Timeline;
