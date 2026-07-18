import "./Tasks.css";
import { useState } from "react";

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
const [search,setsearch]=useState("");
const filteredTasks = tasks.filter((task) =>
  task.name.toLowerCase().includes(search.toLowerCase()) ||
  task.project.toLowerCase().includes(search.toLowerCase()) ||
  task.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
  task.priority.toLowerCase().includes(search.toLowerCase()) ||
  task.status.toLowerCase().includes(search.toLowerCase()) ||
  task.dueDate.toLowerCase().includes(search.toLowerCase())
);
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
          onChange={(e)=>setsearch(e.target.value)}/>

        </div>

        <div className="filters">

          <select onChange={(e)=>setsearch(e.target.value)}>

            <option value= "">All Status</option>

            <option value ="Pending">Pending</option>

            <option value ="In progress">In Progress</option>

            <option value ="Completed">Completed</option>

          </select>

          <select onChange={(e)=>setsearch(e.target.value)}>

            <option value = "">Priority</option>

            <option value ="High">High</option>

            <option value = "Medium">Medium</option>

            <option value="Low">Low</option>

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
                        {filteredTasks.map((task) => (

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