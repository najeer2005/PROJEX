import "./Employees.css";

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
          />

        </div>

        <div className="filters">

          <select>

            <option>All Departments</option>

            <option>Frontend</option>

            <option>Backend</option>

            <option>UI/UX</option>

            <option>QA</option>

            <option>DevOps</option>

          </select>

          <select>

            <option>All Status</option>

            <option>Active</option>

            <option>Available</option>

            <option>On Leave</option>

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
                        {employees.map((employee) => (

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