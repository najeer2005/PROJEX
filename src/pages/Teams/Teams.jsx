import "./Teams.css";
import { useState, useEffect } from "react";
import FormModal from "../../components/FormModal";

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
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ Team: "", TeamLead: "", Department: "Engineering", Members: 1, Projects: 0, Status: "Planning" });

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

  const handleDelete = async (teamId) => {
    if (!window.confirm("Delete this team?")) return;
    try {
      const response = await fetch(`http://localhost:5000/teams/delete/${teamId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete team");
      setTeams((previous) => previous.filter((team) => team._id !== teamId));
    } catch (error) { alert(error.message); }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: ["Members", "Projects"].includes(name) ? Number(value) : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/teams/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add team");
      setShowForm(false);
      fetchTeams();
    } catch (error) { alert(error.message); } finally { setLoading(false); }
  };

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

        <button className="primary-btn" onClick={() => setShowForm(true)}>

          <HiPlus />

          Add Team

        </button>

      </div>

      {showForm && (
        <FormModal title="Add Team" onClose={() => setShowForm(false)} onSubmit={handleSubmit} submitLabel="Save Team" loading={loading}>
          <div className="form-field"><label htmlFor="team-name">Team Name</label><input id="team-name" name="Team" value={formData.Team} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="team-lead">Team Lead</label><input id="team-lead" name="TeamLead" value={formData.TeamLead} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="team-department">Department</label><select id="team-department" name="Department" value={formData.Department} onChange={handleChange}><option>Engineering</option><option>Design</option><option>Quality Assurance</option><option>Infrastructure</option></select></div>
          <div className="form-field"><label htmlFor="team-status">Status</label><select id="team-status" name="Status" value={formData.Status} onChange={handleChange}><option>Active</option><option>Planning</option><option>Maintenance</option><option>In-Progress</option></select></div>
          <div className="form-field"><label htmlFor="team-members">Members</label><input id="team-members" type="number" min="0" name="Members" value={formData.Members} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="team-projects">Projects</label><input id="team-projects" type="number" min="0" name="Projects" value={formData.Projects} onChange={handleChange} required /></div>
        </FormModal>
      )}

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

                  <button className="action delete" onClick={() => handleDelete(team._id)} aria-label={`Delete ${team.Team}`}>

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