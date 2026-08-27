import "./Tasks.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./TaskForm";
import { apiFetch } from "../../api/api";

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
      const response = await apiFetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      const response = await apiFetch(`http://localhost:5000/tasks/delete/${taskId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete task");
      setTasks((previous) => previous.filter((task) => task._id !== taskId));
    } catch (error) { alert(error.message); }
  };

  const handleChange = (event) => setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await apiFetch("http://localhost:5000/tasks/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add task");
      setShowForm(false);
      fetchTasks();
    } catch (error) { alert(error.message); } finally { setLoading(false); }
  };

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ Name: "", Project: "", AssignedTo: "", Priority: "Medium", Status: "Pending", DueDate: "" });
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

        <button className="primary-btn" onClick={() => setShowForm(true)}>

          <HiPlus />

          New Task

        </button>

      </div>

      {showForm && (
        <TaskForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
          loading={loading}
        />
      )}

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

                  <span className={`priority ${(task.Priority || "").toLowerCase().replace(/\s/g, "-")}`}>

                    {task.Priority}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${(task.Status || "")
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {task.Status}

                  </span>

                </td>

                <td>

                    <span className="due-date">

                        {task.DueDate ? new Date(task.DueDate).toLocaleDateString() : "-"}

                    </span>

                </td>

                <td>

                  <button className="action edit">

                    <HiPencilSquare />

                  </button>

                  <button className="action delete" onClick={() => handleDelete(task._id)} aria-label={`Delete ${task.Name}`}>

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