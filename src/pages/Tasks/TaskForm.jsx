import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { apiFetch } from "../../api/api";

function TaskForm({
  formData: initialFormData,
  onChange: externalOnChange,
  onSubmit: externalOnSubmit,
  onClose,
  loading: externalLoading,
}) {
  const navigate = useNavigate();
  const [internalFormData, setInternalFormData] = useState({
    Name: "",
    Project: "",
    AssignedTo: "",
    Priority: "Medium",
    Status: "Pending",
    DueDate: "",
  });

  const formData = initialFormData || internalFormData;
  const onChange = externalOnChange || ((event) => {
    const { name, value } = event.target;
    setInternalFormData((previous) => ({ ...previous, [name]: value }));
  });
  const loading = externalLoading || false;

  const handleSubmit = externalOnSubmit || (async (event) => {
    event.preventDefault();
    try {
      const response = await apiFetch("http://localhost:5000/tasks/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add task");
      alert("Task added successfully.");
      navigate("/tasks");
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2>New Task</h2>
          <p>Create a new task and assign it to the project.</p>
        </div>
      </div>

      <FormModal
        title="New Task"
        onClose={onClose || (() => navigate("/tasks"))}
        onSubmit={handleSubmit}
        submitLabel="Save Task"
        loading={loading}
      >
        <div className="form-field">
          <label htmlFor="task-name">Task Name</label>
          <input id="task-name" name="Name" value={formData.Name} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="task-project">Project</label>
          <input id="task-project" name="Project" value={formData.Project} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="task-assignee">Assigned To</label>
          <input id="task-assignee" name="AssignedTo" value={formData.AssignedTo} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="task-priority">Priority</label>
          <select id="task-priority" name="Priority" value={formData.Priority} onChange={onChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="task-status">Status</label>
          <select id="task-status" name="Status" value={formData.Status} onChange={onChange}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="task-due-date">Due Date</label>
          <input id="task-due-date" type="date" name="DueDate" value={formData.DueDate} onChange={onChange} required />
        </div>
      </FormModal>
    </div>
  );
}

export default TaskForm;
