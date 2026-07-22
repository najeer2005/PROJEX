import "./BugTracker.css";
import { useState, useEffect } from "react";

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
  =======================

  /* =========================
      BUG DATA
  ========================= */



const [bugs, setBugs] = useState([]);
const bugStats = {
  total: bugs.length,
  open: bugs.filter((bug) => bug.Status === "Open").length,
  inProgress: bugs.filter((bug) => bug.Status === "In Progress").length,
  resolved: bugs.filter((bug) => bug.Status === "Resolved").length,
};

useEffect(() => {
  fetchBugs();
}, []);

async function fetchBugs() {
  try {
    const response = await fetch("http://localhost:5000/bugreports");
    const data = await response.json();

    console.log(data);

    setBugs(data.bugReports);
  } catch (error) {
    console.error(error);
  }
}
  const [search,setSearch] = useState("");
  const filteredBugs = bugs.filter(({ Bug, Project, AssignedTo, Priority, Status, ReportedBy }) =>
  Bug.toLowerCase().includes(search.trim().toLowerCase()) ||
  Project.toLowerCase().includes(search.trim().toLowerCase()) ||
  AssignedTo.toLowerCase().includes(search.trim().toLowerCase()) ||
  Priority.toLowerCase().includes(search.trim().toLowerCase()) ||
  Status.toLowerCase().includes(search.trim().toLowerCase()) ||
  ReportedBy.toLowerCase().includes(search.trim().toLowerCase())
);
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
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        </div>

        <div className="filters">

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">All Status</option>

            <option value="Open">Open</option>

            <option value="In Progress">In Progress</option>

            <option value="Resolved">Resolved</option>

          </select>

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">Priority</option>

            <option value="High">High</option>

            <option value="Medium">Medium</option>

            <option value="Low">Low</option>

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
                        {filteredBugs.map((bug) => (

              <tr key={bug._id}>

                <td>

                  <div className="bug-info">

                    <div className="bug-avatar">

                      <HiBugAnt />

                    </div>

                    <div>

                      <strong>{bug.Bug}</strong>

                    </div>

                  </div>

                </td>

                <td>{bug.Project}</td>

                <td>{bug.AssignedTo}</td>

                <td>

                  <span className={`priority ${bug.Priority.toLowerCase()}`}>

                    {bug.Priority}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${bug.Status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {bug.Status}

                  </span>

                </td>

                <td>{bug.ReportedBy}</td>

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