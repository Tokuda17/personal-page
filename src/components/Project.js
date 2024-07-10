import "./Project.css";
import Skill from "./Skill";
import { GithubFill } from "akar-icons";

function Project({ title, description, image, skills, date, gitLink }) {
  return (
    <>
      <div className="project-container">
        <div className="project-text">
          <h2>{title}</h2>
          <ul className="project-skills">
            {skills.map((item, index) => (
              <li key={index}>
                <Skill skill={item} />
              </li>
            ))}
          </ul>
          <p className="project-description">{description}</p>
          <div className="project-text-bottom">
            <div className="project-date">{date}</div>
            <a href={gitLink} target="_blank">
              <GithubFill strokeWidth={1} size={48} color="black" />
            </a>
          </div>
        </div>
        <div className="project-image">
          <img src={image}></img>
        </div>
      </div>
    </>
  );
}

export default Project;
