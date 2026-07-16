import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Section */}

      <div className="hero-left">

        <p className="hero-tag">
          🚀 Project Delivery Management System
        </p>

        <h1>
          Manage Every <span>Project</span><br />
          With Confidence.
        </h1>

        <p className="hero-description">
          Plan, assign, track, collaborate and deliver software
          projects from one centralized platform designed for
          teams of every size.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <Link to="/demo">
            <button className="secondary-btn">
              Live Demo
            </button>
          </Link>

        </div>

      </div>

      {/* Right Section */}

      <div className="hero-right">

        <div className="dashboard-card">

          <div className="dashboard-header">
            <h3>Dashboard Overview</h3>
          </div>

          <div className="dashboard-body">

            <div className="dashboard-item">
              <span>📁 Active Projects</span>
              <span>12</span>
            </div>

            <div className="dashboard-item">
              <span>✅ Completed Tasks</span>
              <span>48</span>
            </div>

            <div className="dashboard-item">
              <span>🐞 Open Bugs</span>
              <span>3</span>
            </div>

            <div className="dashboard-item">
              <span>👥 Team Members</span>
              <span>15</span>
            </div>

            <div className="dashboard-item">
              <span>📊 Progress</span>
              <span>85%</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;