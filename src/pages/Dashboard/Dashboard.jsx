import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../api/api";
import {
  HiFolderOpen,
  HiClipboardDocumentList,
  HiCheckCircle,
  HiBugAnt,
  HiUsers,
  HiArrowTrendingUp,
  HiCalendarDays,
  HiBolt,
  HiUserGroup,
} from "react-icons/hi2";

const apiUrl = "http://localhost:5000";

function Dashboard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState({ projects: [], tasks: [], bugs: [], employees: [], teams: [] });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const responses = await Promise.all([
          apiFetch(`${apiUrl}/projects`),
          apiFetch(`${apiUrl}/tasks`),
          apiFetch(`${apiUrl}/bugreports`),
          apiFetch(`${apiUrl}/employees`),
          apiFetch(`${apiUrl}/teams`),
        ]);
        const [projects, tasks, bugs, employees, teams] = await Promise.all(responses.map((response) => response.json()));
        setDashboardData({ projects: projects.projects || [], tasks, bugs: bugs.bugReports || [], employees, teams });
      } catch (error) {
        console.error("Error loading dashboard:", error);
      }
    };
    loadDashboard();
  }, []);

  const { projects, tasks, bugs, employees, teams } = dashboardData;
  const recentTasks = [...tasks].sort((first, second) => new Date(second.createdAt || 0) - new Date(first.createdAt || 0)).slice(0, 4);
  const activeProjects = projects.filter((project) => ["Active", "In-Progress"].includes(project.status)).slice(0, 4);
  const teamPerformance = teams.map((team) => ({ name: team.Team, tasks: tasks.filter((task) => task.AssignedTo === team.TeamLead).length }));
  const deadlines = [...tasks].filter((task) => task.DueDate).sort((first, second) => new Date(first.DueDate) - new Date(second.DueDate)).slice(0, 3);
  const recentActivity = [
    ...projects.map((project) => ({ user: project.manager, action: `Created ${project.name}`, date: project.createdAt })),
    ...tasks.map((task) => ({ user: task.AssignedTo, action: `Added ${task.Name}`, date: task.createdAt })),
    ...employees.map((employee) => ({ user: employee.Employee, action: "Added new employee", date: employee.createdAt })),
    ...bugs.map((bug) => ({ user: bug.ReportedBy, action: `Reported ${bug.Bug}`, date: bug.createdAt })),
  ].sort((first, second) => new Date(second.date || 0) - new Date(first.date || 0)).slice(0, 4);
  const dashboardStats = {
    projects: projects.length,
    pendingTasks: tasks.filter((task) => task.Status === "Pending").length,
    completedTasks: tasks.filter((task) => task.Status === "Completed").length,
    openBugs: bugs.filter((bug) => bug.Status === "Open").length,
    employees: employees.filter((employee) => employee.Status === "Active").length,
  };
  const cards = [
    { title: "Projects", value: dashboardStats.projects, subtitle: "Recently added", icon: <HiFolderOpen />, color: "blue" },
    { title: "Tasks", value: dashboardStats.pendingTasks, subtitle: "Pending", icon: <HiClipboardDocumentList />, color: "orange" },
    { title: "Completed", value: dashboardStats.completedTasks, subtitle: "Completed Tasks", icon: <HiCheckCircle />, color: "green" },
    { title: "Bugs", value: dashboardStats.openBugs, subtitle: "Open", icon: <HiBugAnt />, color: "red" },
    { title: "Employees", value: dashboardStats.employees, subtitle: "Active Members", icon: <HiUsers />, color: "purple" },
  ];
  const formatDate = (date) => date ? new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : "-";
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const handleViewAll = (page) => navigate(page);

  return (
    <div className="dashboard">
      <div className="dashboard-header"><div><h2>Dashboard</h2><p>Project Delivery Overview</p></div><div className="dashboard-date"><HiCalendarDays /><span>{today}</span></div></div>
      <section className="stats-grid">{cards.map((card) => <div className="stat-card" key={card.title}><div className={`stat-icon ${card.color}`}>{card.icon}</div><h2>{card.value}</h2><h4>{card.title}</h4><p><HiArrowTrendingUp className="trend-icon" />{card.subtitle}</p></div>)}</section>
      <section className="dashboard-grid">
        <div className="dashboard-card"><div className="card-header"><h3>Recent Tasks</h3><button onClick={() => handleViewAll("/tasks")}>View All</button></div><div className="task-list">{recentTasks.map((task) => <div className="task-item" key={task._id}><div className="task-left"><strong>{task.Name}</strong><span>Assigned to {task.AssignedTo}</span></div><div className="task-right"><span className={`priority ${(task.Priority || "").toLowerCase()}`}>{task.Priority}</span><small>{task.Status}</small></div></div>)}</div></div>
        <div className="dashboard-card"><div className="card-header"><h3>Recent Activity</h3><button onClick={() => handleViewAll("/reports")}>View All</button></div><div className="activity-list">{recentActivity.map((activity, index) => <div className="activity-item" key={`${activity.action}-${index}`}><div className="activity-icon"><HiBolt /></div><div className="activity-content"><strong>{activity.user}</strong><p>{activity.action}</p></div><small>{formatDate(activity.date)}</small></div>)}</div></div>
      </section>
      <section className="dashboard-grid">
        <div className="dashboard-card"><div className="card-header"><h3>Active Projects</h3><button onClick={() => handleViewAll("/projects")}>View All</button></div><div className="project-list">{activeProjects.map((project) => <div className="project-item" key={project._id}><div className="project-details"><strong>{project.name}</strong><span>{project.status}</span></div><div className="project-progress"><div className="progress-bar"><div className="progress-fill" style={{ width: `${project.progress || 0}%` }} /></div><small>{project.progress || 0}%</small></div></div>)}</div></div>
        <div className="dashboard-card"><div className="card-header"><h3>Team Performance</h3><button onClick={() => handleViewAll("/teams")}>View All</button></div><div className="team-list">{teamPerformance.map((member) => <div className="team-item" key={member.name}><div className="team-avatar">{(member.name || "?").charAt(0)}</div><div className="team-details"><strong>{member.name}</strong><span>{member.tasks} Tasks Assigned</span></div><HiUserGroup className="team-icon" /></div>)}</div></div>
      </section>
      <section className="third-grid">
        <div className="dashboard-card"><div className="card-header"><h3>Upcoming Deadlines</h3><button onClick={() => handleViewAll("/calendar")}>View All</button></div><div className="deadline-list">{deadlines.map((task) => <div className="deadline-item" key={task._id}><div className="deadline-info"><strong>{task.Name}</strong><span>{task.Project}</span></div><div className="deadline-date">{formatDate(task.DueDate)}</div></div>)}</div></div>
      </section>
    </div>
  );
}

export default Dashboard;
