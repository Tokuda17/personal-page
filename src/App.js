// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline.js";

import poolProtocolImg from "./images/PoolProtocol.pptx.jpg";
import tokuBotImg from "./images/Tokubot.png";
import MT from "./images/MT.png";

function App() {
  const poolProtocolSkills = [
    "JavaScript",
    "Web3.js",
    "Blockchain",
    "Smart Contracts",
  ];
  const tokuBotSkills = ["JavaScript", "Manifest.json", "HTML", "CSS"];
  const personalPageSkills = ["JavaScript", "HTML", "CSS", "React"];
  const experiences = [
    {
      title: "Event 1",
      description: "Description for event 1",
      date: "2023-01-01",
    },
    {
      title: "Event 2",
      description: "Description for event 2",
      date: "2023-02-01",
    },
    {
      title: "Event 3",
      description: "Description for event 3",
      date: "2023-03-01",
    },
    {
      title: "Event 4",
      description: "Description for event 4",
      date: "2023-04-01",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <body>
        <Home />

        <h1 id="Latest-Projects">
          <span>Latest Projects</span>
        </h1>
        <div className="projects">
          <Project
            title="Pool Protocol"
            description="A delta-neutral decentralized finance blockchain application meant for caputring leveraged liquidity pool yields. The application required uses JS's Web3.js library to interact with other DeFi protocols such as 1inch Exchange, Pangolin, AAVE, and Alpha Homora."
            image={poolProtocolImg}
            skills={poolProtocolSkills}
            date="June 2022 - May 2024"
            gitLink="https://github.com/Tokuda17/Pool-Protocol-V2"
          />
          <Project
            title="TokuBot"
            description="A poker bot extension that provides real time assistance to the player using Game Theory Optimal Principles. Currently, just works with preflop action; however, planning to use AI and counterfactual regret minimization to solve post-flop play."
            image={tokuBotImg}
            skills={tokuBotSkills}
            date="May 2024 - Current"
            gitLink="https://github.com/Tokuda17/TokuBot"
          />
          <Project
            title="Personal Page"
            description="React Application to display latest projects and experiences as a software engineers. "
            image={MT}
            skills={personalPageSkills}
            date="June 2024 - Current"
            gitLink="https://github.com/Tokuda17/personal-page"
          />
        </div>
        <h1 id="Experience">
          <span>Experience</span>
        </h1>
        <Timeline experiences={experiences} />

        <div id="Contact">
          <Contact />
        </div>
      </body>
    </>
  );
}

export default App;
