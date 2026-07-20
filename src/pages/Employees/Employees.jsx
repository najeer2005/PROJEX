import "./Employees.css";
import { useState } from "react";

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

  /* =========================
      EMPLOYEE DATA
  ========================= */

  const employees = [

    {
      id: 1,
      name: "Rahul Sharma",
      employeeId: "EMP001",
      department: "Frontend",
      role: "React Developer",
      status: "Active",
      projects: 3,
    },

    {
      id: 2,
      name: "Priya Reddy",
      employeeId: "EMP002",
      department: "Backend",
      role: "Node.js Developer",
      status: "Active",
      projects: 2,
    },

    {
      id: 3,
      name: "David Kumar",
      employeeId: "EMP003",
      department: "UI/UX",
      role: "UI Designer",
      status: "On Leave",
      projects: 1,
    },

    {
      id: 4,
      name: "John Peter",
      employeeId: "EMP004",
      department: "QA",
      role: "QA Engineer",
      status: "Active",
      projects: 2,
    },

    {
      id: 5,
      name: "Sneha Patel",
      employeeId: "EMP005",
      department: "DevOps",
      role: "DevOps Engineer",
      status: "Available",
      projects: 0,
    },

  ];
  const [search, setSearch] = useState("");

const filteredEmployees = employees.filter(({ name, department,role,status,employeeId}) =>
  name.toLowerCase().includes(search.trim().toLowerCase()) ||
  department.toLowerCase().includes(search.trim().toLowerCase()) ||
  role.toLowerCase().includes(search.trim().toLowerCase()) ||
  status.toLowerCase().includes(search.trim().toLowerCase()) ||
  employeeId.toLowerCase().includes(search.trim().toLowerCase())
);
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

              <tr key={employee.id}>

                <td>

                  <div className="employee-info">

                    <div className="employee-avatar">

                      {employee.name.charAt(0)}

                    </div>

                    <div>

                      <strong>{employee.name}</strong>

                    </div>

                  </div>

                </td>

                <td>{employee.employeeId}</td>

                <td>{employee.department}</td>

                <td>{employee.role}</td>

                <td>

                  <span
                    className={`status ${employee.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {employee.status}

                  </span>

                </td>

                <td>

                  <span className="project-count">

                    {employee.projects}

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