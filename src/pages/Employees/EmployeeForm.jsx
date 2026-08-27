import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { apiFetch } from "../../api/api";

function EmployeeForm({
  formData: initialFormData,
  onChange: externalOnChange,
  onSubmit: externalOnSubmit,
  onClose,
  loading: externalLoading,
}) {
  const navigate = useNavigate();
  const [internalFormData, setInternalFormData] = useState({
    Employee: "",
    EmployeeID: "",
    Department: "Frontend",
    Role: "",
    Status: "Available",
    Projects: 0,
  });

  const formData = initialFormData || internalFormData;
  const onChange = externalOnChange || ((event) => {
    const { name, value } = event.target;
    setInternalFormData((previous) => ({
      ...previous,
      [name]: name === "Projects" ? Number(value) : value,
    }));
  });
  const loading = externalLoading || false;

  const handleSubmit = externalOnSubmit || (async (event) => {
    event.preventDefault();
    try {
      const response = await apiFetch("http://localhost:5000/employees/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add employee");
      alert("Employee added successfully.");
      navigate("/employees");
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2>Add Employee</h2>
          <p>Create a new employee profile and assign project capacity.</p>
        </div>
      </div>

      <FormModal
        title="Add Employee"
        onClose={onClose || (() => navigate("/employees"))}
        onSubmit={handleSubmit}
        submitLabel="Save Employee"
        loading={loading}
      >
        <div className="form-field">
          <label htmlFor="employee-name">Employee Name</label>
          <input id="employee-name" name="Employee" value={formData.Employee} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="employee-id">Employee ID</label>
          <input id="employee-id" name="EmployeeID" value={formData.EmployeeID} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="employee-department">Department</label>
          <select id="employee-department" name="Department" value={formData.Department} onChange={onChange}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>UI/UX</option>
            <option>QA</option>
            <option>DevOps</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="employee-role">Role</label>
          <input id="employee-role" name="Role" value={formData.Role} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="employee-status">Status</label>
          <select id="employee-status" name="Status" value={formData.Status} onChange={onChange}>
            <option>Active</option>
            <option>Available</option>
            <option>On Leave</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="employee-projects">Projects</label>
          <input id="employee-projects" type="number" min="0" name="Projects" value={formData.Projects} onChange={onChange} />
        </div>
      </FormModal>
    </div>
  );
}

export default EmployeeForm;
