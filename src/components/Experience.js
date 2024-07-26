import "./Experience.css";

function Experience() {
  return (
    <>
      <div id="timeline-content">
        <h1>Timeline</h1>

        <ul class="timeline">
          <li class="event" data-date="65Million B.C.">
            <h3>Dinosaurs Roamed the Earth</h3>
            <p>RAWWWWWWRRR 🐢🦂</p>
          </li>
          <li class="event" data-date="2005">
            <h3>Creative Component Launched</h3>
            <p>"We can be all things to all people!" 📣</p>
          </li>
          <li class="event" id="date" data-date="2009">
            <h3>Squareflair was Born</h3>
            <p>"We can be all things to Squarespace users!" 📣</p>
          </li>

          <li class="event" data-date="2021">
            <h3>Squareflair was Born</h3>
            <p>"We can be all things to Squarespace users!" 📣</p>

            <p>
              <strong>
                Our success can be measured by lives and brands enhanced by 9+
                years of 100% Squarespace-focused service!
              </strong>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
