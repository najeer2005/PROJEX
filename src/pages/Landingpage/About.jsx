import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-header">

        <p className="about-tag">
          ABOUT US
        </p>

        <h2>
          Everything Your Team Needs
          <span> In One Place.</span>
        </h2>

        <p className="about-subtitle">
          Projex helps software teams manage projects,
          collaborate efficiently, and deliver products faster
          from a single centralized platform.
        </p>

      </div>

      <div className="about-container">

        <div className="about-box">

          <div className="icon">
            <img src="C:\Users\sys-18\Desktop\PROJEX\src\components\file.png"/>
          </div>

          <h3>Project Planning</h3>

          <p>
            Organize projects with clear goals,
            milestones and deadlines.
          </p>

        </div>

        <div className="about-box">

          <div className="icon">👥</div>

          <h3>Team Collaboration</h3>

          <p>
            Work together with developers,
            testers and managers in one workspace.
          </p>

        </div>

        <div className="about-box">

          <div className="icon">📊</div>

          <h3>Track Progress</h3>

          <p>
            Monitor tasks, bugs and overall
            project performance in real time.
          </p>

        </div>

      </div>

      <div className="about-stats">

        <div className="stat">

          <h2>100+</h2>

          <p>Projects Managed</p>

        </div>

        <div className="stat">

          <h2>50+</h2>

          <p>Active Teams</p>

        </div>

        <div className="stat">

          <h2>1000+</h2>

          <p>Tasks Completed</p>

        </div>

        <div className="stat">

          <h2>99%</h2>

          <p>Delivery Success</p>

        </div>

      </div>

    </section>
  );
}

export default About;