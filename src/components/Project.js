import "./Project.css";
import Skill from "./Skill";

function Project({ title, description, image, skills, date }) {
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
          <div className="project-date">{date}</div>
        </div>
        <div className="project-image">
          <img src={image}></img>
        </div>
      </div>
    </>
  );
}

export default Project;
