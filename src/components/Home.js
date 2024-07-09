import profile from "../images/Profile.jpg";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="text">
          <div className="welcome">Welcome, I'm</div>
          <div className="name">Michael Tokuda,</div>
          <div className="description">
            A computer science major at Rutgers University. I'm passionate about
            software engineering and excited to create innovative solutions and
            cutting-edge applications. Join me on my journey as I dive into the
            world of technology and bring ideas to life!
          </div>
        </div>
        <div className="profile">
          <img src={profile}></img>
        </div>
      </div>
    </>
  );
}

export default Home;
