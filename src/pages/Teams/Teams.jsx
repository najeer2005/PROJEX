import "./Teams.css";
import { use } from "react";
import { useState } from "react";
import { useEffect } from "react";

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

  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const filteredTeams = teams.filter(({Team, TeamLead, Department, Members, Projects, Status}) =>
  Team.toLowerCase().includes(search.trim().toLowerCase()) ||
  TeamLead.toLowerCase().includes(search.trim().toLowerCase()) ||
  Department.toLowerCase().includes(search.trim().toLowerCase()) ||
  Status.toLowerCase().includes(search.trim().toLowerCase()) 
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