// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import poolProtocolImg from "./images/PoolProtocol.pptx.jpg";
import tokuBotImg from "./images/Tokubot.png";

function App() {
  const poolProtocolSkills = [
    "JavaScript",
    "Web3.js",
    "Blockchain",
    "Smart Contracts",
  ];
  const tokuBotSkills = ["JavaScript", "Manifest.json", "HTML", "CSS"];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <body>
        <Home />
        <h1>Latest Projects</h1>
        <Project
          title="Pool Protocol"
          description="A delta-neutral decentralized finance blockchain application meant for caputring leveraged liquidity pool yields. The application required uses JS's Web3.js library to interact with other DeFi protocols such as 1inch Exchange, Pangolin, AAVE, and Alpha Homora."
          image={poolProtocolImg}
          skills={poolProtocolSkills}
          date="June 2022 - May 2024"
        />
        <Project
          title="TokuBot"
          description="A poker bot extension that provides real time assistance to the player using Game Theory Optimal Principles. Currently, just works with preflop action; however, planning to use AI and counterfactual regret minimization to solve post-flop play."
          image={tokuBotImg}
          skills={tokuBotSkills}
          date="May 2024 - Current"
        />
        <h1>Experience</h1>
        <Contact />
      </body>
    </>
  );
}

export default App;
