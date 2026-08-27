import "./Employees.css";
import { useState } from "react";
import { useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import { apiFetch } from "../../api/api";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiUsers,
  HiUser,
  HiBriefcase,
  HiBuildingOffice2,
  HiPencilSquare,
  HiTrash,
} from "react-icons/hi2";


function Employees() {

  /* =========================
      EMPLOYEE STATISTICS
  ========================= */

  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ Employee: "", EmployeeID: "", Department: "Frontend", Role: "", Status: "Available", Projects: 0 });
  const employeeStats = {
  total: employees.length,
  active: employees.filter((e) => e.Status === "Active").length,
  onLeave: employees.filter((e) => e.Status === "On Leave").length,
  available: employees.filter((e) => e.Status === "Available").length,
};
  async function fetchEmployees() {
    try {
      const response = await apiFetch("http://localhost:5000/employees");
      const data = await response.json();
      setEmployees(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  } ;
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    if (!window.confirm("Delete this employee?")) return;
    try {
      const response = await apiFetch(`http://localhost:5000/employees/delete/${employeeId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete employee");
      setEmployees((previous) => previous.filter((employee) => employee._id !== employeeId));
    } catch (error) { alert(error.message); }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: name === "Projects" ? Number(value) : value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await apiFetch("http://localhost:5000/employees/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add employee");
      setShowForm(false);
      setFormData({ Employee: "", EmployeeID: "", Department: "Frontend", Role: "", Status: "Available", Projects: 0 });
      fetchEmployees();
    } catch (error) { alert(error.message); } finally { setLoading(false); }
  };

  /* =========================
      EMPLOYEE DATA
  ========================= */

const [search, setSearch] = useState("");
const [departmentFilter, setDepartmentFilter] = useState("");
const [statusFilter, setStatusFilter] = useState("");
const filteredEmployees = employees.filter((employee) => {

    const keyword = search.toLowerCase();

    const matchesSearch =
        employee.Employee.toLowerCase().includes(keyword) ||
        employee.EmployeeID.toLowerCase().includes(keyword) ||
        employee.Department.toLowerCase().includes(keyword) ||
        employee.Role.toLowerCase().includes(keyword) ||
        employee.Status.toLowerCase().includes(keyword);

    const matchesDepartment =
        departmentFilter === "" ||
        employee.Department === departmentFilter;

    const matchesStatus =
        statusFilter === "" ||
        employee.Status === statusFilter;

    return matchesSearch &&
           matchesDepartment &&
           matchesStatus;
});

console.log("Employees State:", employees);
console.log("Filtered Employees:", filteredEmployees);

    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Employees</h2>

          <p>Manage employees, departments and project assignments.</p>

        </div>

        <button className="primary-btn" onClick={() => setShowForm(true)}>

          <HiPlus />

          Add Employee

        </button>

      </div>

      {showForm && (
        <EmployeeForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
          loading={loading}
        />
      )}

      {/* =========================
          EMPLOYEE STATISTICS
      ========================= */}

      <section className="employee-stats">

        <div className="employee-stat-card">

          <HiUsers />

          <div>

            <h3>{employeeStats.total}</h3>

            <span>Total Employees</span>

          </div>

        </div>

        <div className="employee-stat-card">

          <HiUser />

          <div>

            <h3>{employeeStats.active}</h3>

            <span>Active</span>

          </div>

        </div>

        <div className="employee-stat-card">

          <HiBriefcase />

          <div>

            <h3>{employeeStats.onLeave}</h3>

            <span>On Leave</span>

          </div>

        </div>

        <div className="employee-stat-card">

          <HiBuildingOffice2 />

          <div>

            <h3>{employeeStats.available}</h3>

            <span>Available</span>

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
            placeholder="Search employee..."
          value ={search}
          onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="filters">


          <select value ={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>

            <option value ="">All Departments</option>

            <option value = "Frontend">Frontend</option>

            <option value="Backend">Backend</option>

            <option value="UI/UX">UI/UX</option>

            <option value ="QA">QA</option>

            <option value="DevOps">DevOps</option>

          </select>


          <select value ={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>

            <option value ="">All Status</option>

            <option value="Active">Active</option>

            <option value="Available">Available</option>

            <option value ="On Leave">On Leave</option>

          </select>

        </div>

      </div>

      {/* =========================
          EMPLOYEE TABLE
      ========================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Employee</th>

              <th>Employee ID</th>

              <th>Department</th>

              <th>Role</th>

              <th>Status</th>

              <th>Projects</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                        {filteredEmployees.map((employee) => (

              <tr key={employee._id}>

                <td>

                  <div className="employee-info">

                    <div className="employee-avatar">

                      {employee.Employee ? employee.Employee.charAt(0) : "?"}

                    </div>

                    <div>

                      <strong>{employee.Employee}</strong>

                    </div>

                  </div>

                </td>

                <td>{employee.EmployeeID}</td>

                <td>{employee.Department}</td>

                <td>{employee.Role}</td>

                <td>

                  <span
                    className={`status ${employee.Status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {employee.Status}

                  </span>

                </td>

                <td>

                  <span className="project-count">

                    {employee.Projects}

                  </span>

                </td>

                <td>

                  <button className="action edit">

                    <HiPencilSquare />

                  </button>

                  <button className="action delete" onClick={() => handleDelete(employee._id)} aria-label={`Delete ${employee.Employee}`}>

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

export default Employees;