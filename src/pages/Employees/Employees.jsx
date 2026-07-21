import "./Employees.css";
import { useState } from "react";
import { useEffect } from "react";

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

  const employeeStats = {

    total: 18,

    active: 15,

    onLeave: 2,

    available: 13,

  };
  const [employees, setEmployees] = useState([]);
  async function fetchEmployees() {
    try {
      const response = await fetch("http://localhost:5000/employees");
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

  /* =========================
      EMPLOYEE DATA
  ========================= */

const [search, setSearch] = useState("");
const filteredEmployees = employees.filter((employee) =>
  (employee.Employee || "").toLowerCase().includes(search.toLowerCase()) ||
  (employee.EmployeeID || "").toLowerCase().includes(search.toLowerCase()) ||
  (employee.Department || "").toLowerCase().includes(search.toLowerCase()) ||
  (employee.Role || "").toLowerCase().includes(search.toLowerCase()) ||
  (employee.Status || "").toLowerCase().includes(search.toLowerCase())
);

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

        <button className="primary-btn">

          <HiPlus />

          Add Employee

        </button>

      </div>

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

          <select value ={search} onChange={(e) => setSearch(e.target.value)}>

            <option value ="">All Departments</option>

            <option value = "frontend">Frontend</option>

            <option>Backend</option>

            <option value="ui/ux">UI/UX</option>

            <option value ="QA">QA</option>

            <option value="devops">DevOps</option>

          </select>

          <select value ={search} onChange={(e) => setSearch(e.target.value)}>

            <option value ="">All Status</option>

            <option value="Active">Active</option>

            <option>Available</option>

            <option value ="onLeave">On Leave</option>

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

export default Employees;