import "./Teams.css";
import { useState, useEffect } from "react";

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
  
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  /* =========================
      TEAM STATISTICS
  ========================= */

const teamStats = {
    totalTeams: teams.length,
    totalMembers: teams.reduce((sum, team) => sum + team.Members, 0),
    activeProjects: teams.reduce((sum, team) => sum + team.Projects, 0),
    teamLeads: teams.length,
};

  /* =========================
      TEAM DATA
  ========================= */
  async function fetchTeams() {

    try {
      const response = await fetch("http://localhost:5000/teams");
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }
  useEffect(() => {
    fetchTeams();
  }, []);

  const filteredTeams = teams.filter((team)=>{

const keyword = search.trim().toLowerCase();

const matchesSearch =
(team.Team || "").toLowerCase().includes(keyword) ||
(team.TeamLead || "").toLowerCase().includes(keyword) ||
(team.Department || "").toLowerCase().includes(keyword) ||
(team.Status || "").toLowerCase().includes(keyword);

const matchesDepartment =
departmentFilter === "" ||
team.Department === departmentFilter;

const matchesStatus =
statusFilter === "" ||
team.Status === statusFilter;

return matchesSearch &&
matchesDepartment &&
matchesStatus;

});
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

          <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>

            <option value="">All Departments</option>

            <option value="Engineering">Engineering</option>

            <option value="Design">Design</option>

            <option value="Quality Assurance">Quality Assurance</option>

            <option value="Infrastructure">Infrastructure</option>

          </select>

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>

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

              <tr key={team._id}>

                <td>

                  <div className="team-info">

                    <div className="team-avatar">

                      {team.Team.charAt(0)}

                    </div>

                    <div>

                      <strong>{team.Team}</strong>

                    </div>

                  </div>

                </td>

                <td>{team.TeamLead}</td>

                <td>{team.Department}</td>

                <td>

                  <span className="member-count">

                    {team.Members}

                  </span>

                </td>

                <td>

                  <span className="project-count">

                    {team.Projects}

                  </span>

                </td>

                <td>

                  <span
                    className={`status ${team.Status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {team.Status}

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