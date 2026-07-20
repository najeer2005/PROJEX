import "./Teams.css";
import { useState } from "react";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiUserGroup,
  HiUsers,
  HiBriefcase,
  HiFolderOpen,
  HiPencilSquare,
  HiTrash,
} from "react-icons/hi2";

function Teams() {

  /* =========================
      TEAM STATISTICS
  ========================= */

  const teamStats = {

    totalTeams: 5,

    totalMembers: 18,

    activeProjects: 12,

    teamLeads: 5,

  };

  /* =========================
      TEAM DATA
  ========================= */

  const teams = [

    {
      id:1,
      name:"Frontend Team",
      lead:"Rahul Sharma",
      department:"Engineering",
      members:5,
      projects:3,
      status:"Active"
    },

    {
      id:2,
      name:"Backend Team",
      lead:"Priya Reddy",
      department:"Engineering",
      members:4,
      projects:4,
      status:"Active"
    },

    {
      id:3,
      name:"QA Team",
      lead:"John Peter",
      department:"Quality Assurance",
      members:3,
      projects:2,
      status:"Active"
    },

    {
      id:4,
      name:"UI / UX Team",
      lead:"David Kumar",
      department:"Design",
      members:3,
      projects:2,
      status:"Planning"
    },

    {
      id:5,
      name:"DevOps Team",
      lead:"Sneha Patel",
      department:"Infrastructure",
      members:3,
      projects:1,
      status:"Maintenance"
    }

  ];
  const [search,setSearch] = useState("");
  const filteredTeams = teams.filter(({ name, lead, department, status }) =>
  name.toLowerCase().includes(search.trim().toLowerCase()) ||
  lead.toLowerCase().includes(search.trim().toLowerCase()) ||
  department.toLowerCase().includes(search.trim().toLowerCase()) ||
  status.toLowerCase().includes(search.trim().toLowerCase()) 
);
    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Teams</h2>

          <p>Manage development teams and their members.</p>

        </div>

        <button className="primary-btn">

          <HiPlus />

          Add Team

        </button>

      </div>

      {/* =========================
          TEAM STATISTICS
      ========================= */}

      <section className="team-stats">

        <div className="team-stat-card">

          <HiUserGroup />

          <div>

            <h3>{teamStats.totalTeams}</h3>

            <span>Total Teams</span>

          </div>

        </div>

        <div className="team-stat-card">

          <HiUsers />

          <div>

            <h3>{teamStats.totalMembers}</h3>

            <span>Total Members</span>

          </div>

        </div>

        <div className="team-stat-card">

          <HiFolderOpen />

          <div>

            <h3>{teamStats.activeProjects}</h3>

            <span>Projects</span>

          </div>

        </div>

        <div className="team-stat-card">

          <HiBriefcase />

          <div>

            <h3>{teamStats.teamLeads}</h3>

            <span>Team Leads</span>

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
            placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        </div>

        <div className="filters">

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">All Departments</option>

            <option value="Engineering">Engineering</option>

            <option value="Design">Design</option>

            <option value="Quality Assurance">Quality Assurance</option>

            <option value="Infrastructure">Infrastructure</option>

          </select>

          <select value={search} onChange={(e) => setSearch(e.target.value)}>

            <option value="">All Status</option>

            <option value="Active">Active</option>

            <option value="Planning">Planning</option>

            <option value="Maintenance">Maintenance</option>

          </select>

        </div>

      </div>

      {/* =========================
          TEAM TABLE
      ========================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Team</th>

              <th>Team Lead</th>

              <th>Department</th>

              <th>Members</th>

              <th>Projects</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                        {filteredTeams.map((team) => (

              <tr key={team.id}>

                <td>

                  <div className="team-info">

                    <div className="team-avatar">

                      {team.name.charAt(0)}

                    </div>

                    <div>

                      <strong>{team.name}</strong>

                    </div>

                  </div>

                </td>

                <td>{team.lead}</td>

                <td>{team.department}</td>

                <td>

                  <span className="member-count">

                    {team.members}

                  </span>

                </td>

                <td>

                  <span className="project-count">

                    {team.projects}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${team.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {team.status}

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

export default Teams;