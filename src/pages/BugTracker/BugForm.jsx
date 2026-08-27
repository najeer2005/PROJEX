import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { apiFetch } from "../../api/api";

function BugForm({
  formData: initialFormData,
  onChange: externalOnChange,
  onSubmit: externalOnSubmit,
  onClose,
  loading: externalLoading,
}) {
  const navigate = useNavigate();
  const [internalFormData, setInternalFormData] = useState({
    Bug: "",
    Project: "",
    AssignedTo: "",
    Priority: "Medium",
    Status: "Open",
    ReportedBy: "",
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
      const response = await apiFetch("http://localhost:5000/bugreports/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to report bug");
      alert("Bug reported successfully.");
      navigate("/bugs");
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2>Report Bug</h2>
          <p>Submit a bug report with priority, assignee, and status details.</p>
        </div>
      </div>

      <FormModal
        title="Report Bug"
        onClose={onClose || (() => navigate("/bugs"))}
        onSubmit={handleSubmit}
        submitLabel="Save Bug"
        loading={loading}
      >
        <div className="form-field full-width">
          <label htmlFor="bug-title">Bug Description</label>
          <textarea id="bug-title" name="Bug" value={formData.Bug} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="bug-project">Project</label>
          <input id="bug-project" name="Project" value={formData.Project} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="bug-assigned-to">Assigned To</label>
          <input id="bug-assigned-to" name="AssignedTo" value={formData.AssignedTo} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="bug-priority">Priority</label>
          <select id="bug-priority" name="Priority" value={formData.Priority} onChange={onChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="bug-status">Status</label>
          <select id="bug-status" name="Status" value={formData.Status} onChange={onChange}>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
        <div className="form-field full-width">
          <label htmlFor="bug-reported-by">Reported By</label>
          <input id="bug-reported-by" name="ReportedBy" value={formData.ReportedBy} onChange={onChange} required />
        </div>
      </FormModal>
    </div>
  );
}

export default BugForm;
