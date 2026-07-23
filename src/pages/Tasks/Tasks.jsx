import "./Tasks.css";
import { useState } from "react";
import { useEffect } from "react";

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
      TASK DATA
  ========================= */
  const [tasks, setTasks] = useState([]);
  const taskStats = {
  total: tasks.length,
  pending: tasks.filter((t) => t.Status === "Pending").length,
  inProgress: tasks.filter((t) => t.Status === "In Progress").length,
  completed: tasks.filter((t) => t.Status === "Completed").length,
};
  async function fetchTasks() {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const filteredTasks = tasks.filter((task) => {

    const keyword = search.trim().toLowerCase();

    const matchesSearch =
        (task.Name || "").toLowerCase().includes(keyword) ||
        (task.Project || "").toLowerCase().includes(keyword) ||
        (task.AssignedTo || "").toLowerCase().includes(keyword) ||
        (task.Priority || "").toLowerCase().includes(keyword) ||
        (task.Status || "").toLowerCase().includes(keyword) ||
        (task.DueDate || "").toLowerCase().includes(keyword);

    const matchesStatus =
        statusFilter === "" ||
        task.Status === statusFilter;

    const matchesPriority =
        priorityFilter === "" ||
        task.Priority === priorityFilter;

    return matchesSearch &&
           matchesStatus &&
           matchesPriority;

});
  console.log(filteredTasks);
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
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        </div>

        <div className="filters">

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>

            <option value="">All Status</option>

            <option value="Pending">Pending</option>

            <option value="In Progress">In Progress</option>

            <option value="Completed">Completed</option>

          </select>

          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>

            <option value="">Priority</option>

            <option value="High">High</option>

            <option value="Medium">Medium</option>

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

              <tr key={task._id}>

                <td>{task.Name}</td>

                <td>{task.Project}</td>

                <td>{task.AssignedTo}</td>

                <td>

                  <span className={`priority ${task.Priority.toLowerCase()}`}>

                    {task.Priority}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${task.Status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {task.Status}

                  </span>

                </td>

                <td>

                    <span className="due-date">

                        {new Date(task.DueDate).toLocaleDateString()}

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