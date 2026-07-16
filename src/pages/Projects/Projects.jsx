import "./Projects.css";

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

  const projects = [

    {
      id: 1,
      name: "CRM Portal",
      manager: "Rahul",
      client: "ABC Pvt Ltd",
      status: "Active",
      priority: "High",
      progress: 82,
    },

    {
      id: 2,
      name: "Inventory System",
      manager: "Priya",
      client: "XYZ Industries",
      status: "Planning",
      priority: "Medium",
      progress: 35,
    },

    {
      id: 3,
      name: "HRMS",
      manager: "John",
      client: "Global Tech",
      status: "Completed",
      priority: "Low",
      progress: 100,
    },

    {
      id: 4,
      name: "Delivery App",
      manager: "David",
      client: "Fast Express",
      status: "Active",
      priority: "High",
      progress: 67,
    },

  ];

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
          />

        </div>

        <div className="filters">

          <select>

            <option>All Status</option>

            <option>Planning</option>

            <option>Active</option>

            <option>Completed</option>

          </select>

          <select>

            <option>Priority</option>

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

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

            {projects.map((project) => (

              <tr key={project.id}>

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