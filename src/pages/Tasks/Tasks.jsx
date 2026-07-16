import "./Tasks.css";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiClipboardDocumentList,
  HiClock,
  HiCheckCircle,
  HiPlay,
  HiPencilSquare,
  HiTrash,
} from "react-icons/hi2";

function Tasks() {

  /* =========================
      TASK STATISTICS
  ========================= */

  const taskStats = {

    total: 42,

    pending: 18,

    inProgress: 16,

    completed: 8,

  };

  /* =========================
      TASK DATA
  ========================= */

  const tasks = [

    {
      id: 1,
      name: "Login API",
      project: "CRM Portal",
      assignedTo: "Rahul",
      priority: "High",
      status: "In Progress",
      dueDate: "18 Jul 2026",
    },

    {
      id: 2,
      name: "Dashboard UI",
      project: "HRMS",
      assignedTo: "David",
      priority: "Medium",
      status: "Completed",
      dueDate: "20 Jul 2026",
    },

    {
      id: 3,
      name: "Payment Gateway",
      project: "Inventory System",
      assignedTo: "Priya",
      priority: "High",
      status: "Pending",
      dueDate: "22 Jul 2026",
    },

    {
      id: 4,
      name: "Employee Module",
      project: "HRMS",
      assignedTo: "John",
      priority: "Low",
      status: "Pending",
      dueDate: "25 Jul 2026",
    },

  ];
    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Tasks</h2>

          <p>Manage project tasks and assignments.</p>

        </div>

        <button className="primary-btn">

          <HiPlus />

          New Task

        </button>

      </div>

      {/* =========================
          TASK STATISTICS
      ========================= */}

      <section className="task-stats">

        <div className="task-stat-card">

          <HiClipboardDocumentList />

          <div>

            <h3>{taskStats.total}</h3>

            <span>Total Tasks</span>

          </div>

        </div>

        <div className="task-stat-card">

          <HiClock />

          <div>

            <h3>{taskStats.pending}</h3>

            <span>Pending</span>

          </div>

        </div>

        <div className="task-stat-card">

          <HiPlay />

          <div>

            <h3>{taskStats.inProgress}</h3>

            <span>In Progress</span>

          </div>

        </div>

        <div className="task-stat-card">

          <HiCheckCircle />

          <div>

            <h3>{taskStats.completed}</h3>

            <span>Completed</span>

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
            placeholder="Search task..."
          />

        </div>

        <div className="filters">

          <select>

            <option>All Status</option>

            <option>Pending</option>

            <option>In Progress</option>

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

      {/* =========================
          TASK TABLE
      ========================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Task</th>

              <th>Project</th>

              <th>Assigned To</th>

              <th>Priority</th>

              <th>Status</th>

              <th>Due Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                        {tasks.map((task) => (

              <tr key={task.id}>

                <td>{task.name}</td>

                <td>{task.project}</td>

                <td>{task.assignedTo}</td>

                <td>

                  <span className={`priority ${task.priority.toLowerCase()}`}>

                    {task.priority}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${task.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {task.status}

                  </span>

                </td>

                <td>

                    <span className="due-date">

                        {task.dueDate}

                    </span>

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

export default Tasks;