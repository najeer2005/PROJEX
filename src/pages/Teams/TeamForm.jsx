import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { apiFetch } from "../../api/api";

function TeamForm({
  formData: initialFormData,
  onChange: externalOnChange,
  onSubmit: externalOnSubmit,
  onClose,
  loading: externalLoading,
}) {
  const navigate = useNavigate();
  const [internalFormData, setInternalFormData] = useState({
    Team: "",
    TeamLead: "",
    Department: "Engineering",
    Members: 1,
    Projects: 0,
    Status: "Planning",
  });

  const formData = initialFormData || internalFormData;
  const onChange = externalOnChange || ((event) => {
    const { name, value } = event.target;
    setInternalFormData((previous) => ({
      ...previous,
      [name]: ["Members", "Projects"].includes(name) ? Number(value) : value,
    }));
  });
  const loading = externalLoading || false;

  const handleSubmit = externalOnSubmit || (async (event) => {
    event.preventDefault();
    try {
      const response = await apiFetch("http://localhost:5000/teams/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add team");
      alert("Team created successfully.");
      navigate("/teams");
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2>Add Team</h2>
          <p>Create a new team with members, department, and project assignment.</p>
        </div>
      </div>

      <FormModal
        title="Add Team"
        onClose={onClose || (() => navigate("/teams"))}
        onSubmit={handleSubmit}
        submitLabel="Save Team"
        loading={loading}
      >
        <div className="form-field">
          <label htmlFor="team-name">Team Name</label>
          <input id="team-name" name="Team" value={formData.Team} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="team-lead">Team Lead</label>
          <input id="team-lead" name="TeamLead" value={formData.TeamLead} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="team-department">Department</label>
          <select id="team-department" name="Department" value={formData.Department} onChange={onChange}>
            <option>Engineering</option>
            <option>Design</option>
            <option>Quality Assurance</option>
            <option>Infrastructure</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="team-status">Status</label>
          <select id="team-status" name="Status" value={formData.Status} onChange={onChange}>
            <option>Active</option>
            <option>Planning</option>
            <option>Maintenance</option>
            <option>In-Progress</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="team-members">Members</label>
          <input id="team-members" type="number" min="0" name="Members" value={formData.Members} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="team-projects">Projects</label>
          <input id="team-projects" type="number" min="0" name="Projects" value={formData.Projects} onChange={onChange} required />
        </div>
      </FormModal>
    </div>
  );
}

export default TeamForm;
