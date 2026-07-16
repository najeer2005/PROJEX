import "./BugTracker.css";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiBugAnt,
  HiExclamationTriangle,
  HiClock,
  HiCheckCircle,
  HiPencilSquare,
  HiTrash,
} from "react-icons/hi2";

function BugTracker() {

  /* =========================
      BUG STATISTICS
  ========================= */

  const bugStats = {

    total: 28,

    open: 8,

    inProgress: 12,

    resolved: 8,

  };

  /* =========================
      BUG DATA
  ========================= */

  const bugs = [

    {
      id: 1,
      title: "Login API Failure",
      project: "CRM Portal",
      assignedTo: "Rahul",
      priority: "High",
      status: "Open",
      reportedBy: "John",
    },

    {
      id: 2,
      title: "Dashboard Layout Issue",
      project: "HRMS",
      assignedTo: "David",
      priority: "Medium",
      status: "In Progress",
      reportedBy: "Priya",
    },

    {
      id: 3,
      title: "Payment Timeout",
      project: "Inventory System",
      assignedTo: "John",
      priority: "High",
      status: "Resolved",
      reportedBy: "Sneha",
    },

    {
      id: 4,
      title: "Sidebar Not Responsive",
      project: "Delivery App",
      assignedTo: "Priya",
      priority: "Low",
      status: "Open",
      reportedBy: "Rahul",
    },

  ];
    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Bug Tracker</h2>

          <p>Track, assign and resolve software bugs.</p>

        </div>

        <button className="primary-btn">

          <HiPlus />

          Report Bug

        </button>

      </div>

      {/* =========================
          BUG STATISTICS
      ========================= */}

      <section className="bug-stats">

        <div className="bug-stat-card">

          <HiBugAnt />

          <div>

            <h3>{bugStats.total}</h3>

            <span>Total Bugs</span>

          </div>

        </div>

        <div className="bug-stat-card">

          <HiExclamationTriangle />

          <div>

            <h3>{bugStats.open}</h3>

            <span>Open Bugs</span>

          </div>

        </div>

        <div className="bug-stat-card">

          <HiClock />

          <div>

            <h3>{bugStats.inProgress}</h3>

            <span>In Progress</span>

          </div>

        </div>

        <div className="bug-stat-card">

          <HiCheckCircle />

          <div>

            <h3>{bugStats.resolved}</h3>

            <span>Resolved</span>

          </div>

        </div>

      </section>

      {/* =========================
          SEARCH & FILTERS
      ========================= */}

      <div className="toolbar">

        <div className="search-box">

          <HiMagnifyingGlass />

          <input
            type="text"
            placeholder="Search bug..."
          />

        </div>

        <div className="filters">

          <select>

            <option>All Status</option>

            <option>Open</option>

            <option>In Progress</option>

            <option>Resolved</option>

          </select>

          <select>

            <option>Priority</option>

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

          </select>

        </div>

      </div>

      {/* =========================
          BUG TABLE
      ========================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Bug</th>

              <th>Project</th>

              <th>Assigned To</th>

              <th>Priority</th>

              <th>Status</th>

              <th>Reported By</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                        {bugs.map((bug) => (

              <tr key={bug.id}>

                <td>

                  <div className="bug-info">

                    <div className="bug-avatar">

                      <HiBugAnt />

                    </div>

                    <div>

                      <strong>{bug.title}</strong>

                    </div>

                  </div>

                </td>

                <td>{bug.project}</td>

                <td>{bug.assignedTo}</td>

                <td>

                  <span className={`priority ${bug.priority.toLowerCase()}`}>

                    {bug.priority}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${bug.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {bug.status}

                  </span>

                </td>

                <td>{bug.reportedBy}</td>

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

export default BugTracker;