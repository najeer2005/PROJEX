import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";




const project = location.state;
function EditProject() {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state;

  const [formData, setFormData] = useState({
    id: project.id,
    name: project.name,
    manager: project.manager,
    client: project.client,
    status: project.status,
    priority: project.priority,
    progress: project.progress,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    // Update logic will go here

    alert("Project Updated Successfully!");

    navigate("/projects");
  }

  return (
    <div className="edit-project-container">
      <h2>Edit Project</h2>

      <form onSubmit={handleSubmit}>
        <label>Project Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Manager</label>
        <input
          type="text"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
        />

        <label>Client</label>
        <input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Planning</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <label>Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Progress</label>
        <input
          type="number"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;