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
import donutBasketImg from "./images/logo-no-background.png";
import MT from "./images/MT.png";

function App() {
  const poolProtocolSkills = [
    "JavaScript",
    "Web3.js",
    "Nodemailer.js",
    "Blockchain",
    "Smart Contracts",
  ];
  const tokuBotSkills = [
    "JavaScript",
    "Manifest.json",
    "HTML",
    "CSS",
    "Python",
    "Machine Learning",
    "CFR",
  ];
  const donutBasketSkills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "React.js",
    "Node.js",
  ];
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
    <div className="personal-page-app">
      <div>
        <Navbar />
      </div>
      <body>
        <Home />
        <div className="project-section">
          <h1 id="Latest-Projects">
            <span>Latest Projects</span>
          </h1>
          <div className="projects">
            <Project
              title="Pool Protocol"
              description="Pool Protocol is a delta-neutral DeFi blockchain application designed to capture leveraged liquidity pool yields with minimal risk. Using Web3.js, it integrates with 5 major DeFi protocols to optimize investments, achieving a $609,067 profit with a 24.4% APY over 15 months. The platform includes a Nodemailer.js-based system for daily performance updates and failure alerts.
            "
              image={poolProtocolImg}
              skills={poolProtocolSkills}
              date="June 2022 - May 2024"
              gitLink="https://github.com/Tokuda17/Pool-Protocol-V2"
            />
            <Project
              title="TokuBot"
              description="TokuBot is an AI-driven real-time assistance tool for poker players. It uses counterfactual regret minimization (CFR) and game theory optimal (GTO) strategies to suggest optimal moves. Created a Chrome extension that scrapes data from poker sites and displays insights using JavaScript, HTML, and CSS, and a Flask API that connects a Python-based machine learning model to the JavaScript frontend for seamless interaction."
              image={tokuBotImg}
              skills={tokuBotSkills}
              date="May 2024 - Current"
              gitLink="https://github.com/Tokuda17/TokuBot"
            />
            <Project
              title="Donut Basket Website"
              description="
            Led a team of 4 to design, develop, and maintain a website for Donut Basket, a local business. Utilized Google Analytics to track user behavior and enhance retention through website optimization. Collaborated on wireframes and prototypes with Figma, resulting in an intuitive interface that attracts 200+ daily viewers. Implemented the front end using React.js to create a responsive and user-friendly experience."
              image={donutBasketImg}
              skills={donutBasketSkills}
              date="May 2024 - Current"
              gitLink="https://github.com/Tokuda17/donut-basket"
            />
            <Project
              title="Personal Page"
              description="
            An updated personal portfolio website made with JavaScript and React.js to highlight my top projects and past work experiences.
            "
              image={MT}
              skills={personalPageSkills}
              date="June 2024 - Current"
              gitLink="https://github.com/Tokuda17/personal-page"
            />
          </div>
        </div>
        {/* <h1 id="Experience">
          <span>Experience</span>
        </h1>
        <Timeline experiences={experiences} /> */}

        <div id="Contact">
          <Contact />
        </div>
      </body>
    </div>
  );
}

export default App;
