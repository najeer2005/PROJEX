import "./Projects.css";
import { useState } from "react";
import { useEffect } from "react";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiPencilSquare,
  HiTrash,
  HiFolderOpen,
  HiClock,
  HiCheckCircle,
} from "react-icons/hi2";

function Projects() {

  const projectStats = {

    total: 12,

    active: 8,

    completed: 3,

    planning: 1,

  };

  const [projects,SetProjects] = useState([]);
  async function fetchProjects() {
    try {
      const response = await fetch("http://localhost:5000/projects");
      const data = await response.json();
      SetProjects(data.projects || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }
  useEffect(() => {
    fetchProjects();
  }, []);
console.log(projects);
  const [search,setSearch] = useState("");
  const filteredProjects = projects.filter(
  ({ name, manager, client, status, priority, progress }) => {
    return (
      name.toLowerCase().includes(search.trim().toLowerCase()) ||
      manager.toLowerCase().includes(search.trim().toLowerCase()) ||
      client.toLowerCase().includes(search.trim().toLowerCase()) ||
      status.toLowerCase().includes(search.trim().toLowerCase()) ||
      priority.toLowerCase().includes(search.trim().toLowerCase()) ||
      progress.toString().includes(search.trim())
    );
  }
);

  return (

    <div className="page-content">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>

          <h2>Projects</h2>

          <p>Manage all software development projects.</p>

        </div>

        <button className="primary-btn">

          <HiPlus />

          New Project

        </button>

      </div>

      {/* ================= STATS ================= */}

      <section className="project-stats">

        <div className="project-stat-card">

          <HiFolderOpen />

          <div>

            <h3>{projectStats.total}</h3>

            <span>Total Projects</span>

          </div>

        </div>

        <div className="project-stat-card">

          <HiClock />

          <div>

            <h3>{projectStats.active}</h3>

            <span>Active</span>

          </div>

        </div>

        <div className="project-stat-card">

          <HiCheckCircle />

          <div>

            <h3>{projectStats.completed}</h3>

            <span>Completed</span>

          </div>

        </div>

        <div className="project-stat-card">

          <HiFolderOpen />

          <div>

            <h3>{projectStats.planning}</h3>

            <span>Planning</span>

          </div>

        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <div className="toolbar">

        <div className="search-box">

          <HiMagnifyingGlass />

          <input
            type="text"
            placeholder="Search project..."
          onChange={(e)=>setSearch(e.target.value)}/>

        </div>

        <div className="filters">

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">All Status</option>

            <option value="Planning">Planning</option>

            <option value="Active">Active</option>

            <option value="Completed">Completed</option>

          </select>

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">Priority</option>

            <option value="High">High</option>

            <option value="Medium">Medium</option>

            <option value="Low">Low</option>

          </select>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Project</th>

              <th>Manager</th>

              <th>Client</th>

              <th>Status</th>

              <th>Priority</th>

              <th>Progress</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredProjects.map((project) => (

              <tr key={project._id}>

                <td>{project.name}</td>

                <td>{project.manager}</td>

                <td>{project.client}</td>

                <td>

                  <span className={`status ${project.status.toLowerCase()}`}>

                    {project.status}

                  </span>

                </td>

                <td>

                  <span className={`priority ${project.priority.toLowerCase()}`}>

                    {project.priority}

                  </span>

                </td>

                <td>

                  <div className="progress">

                    <div
                      className="progress-fill"
                      style={{ width: `${project.progress}%` }}
                    ></div>

                  </div>

                  <small>{project.progress}%</small>

                </td>

                <td>

                  <button className="action edit">

                    <HiPencilSquare />

                  </button>

                  <button className="action delete">

                    <HiTrash />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Projects;