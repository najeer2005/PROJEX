import "./Dashboard.css";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

import {
  HiFolderOpen,
  HiClipboardDocumentList,
  HiCheckCircle,
  HiBugAnt,
  HiUsers,
  HiArrowTrendingUp,
  HiCalendarDays,
  HiBolt,
  HiClock,
  HiUserGroup,
} from "react-icons/hi2";

function Dashboard() {

  /* =========================
      DASHBOARD STATS
  ========================= */

  const dashboardStats = {

    projects: 12,

    pendingTasks: 18,

    completedTasks: 246,

    openBugs: 6,

    employees: 18,

  };

  /* =========================
      KPI CARDS
  ========================= */

  const cards = [

    {
      title: "Projects",
      value: dashboardStats.projects,
      subtitle: "+2 This Week",
      icon: <HiFolderOpen />,
      color: "blue",
    },

    {
      title: "Tasks",
      value: dashboardStats.pendingTasks,
      subtitle: "Pending",
      icon: <HiClipboardDocumentList />,
      color: "orange",
    },

    {
      title: "Completed",
      value: dashboardStats.completedTasks,
      subtitle: "Completed Tasks",
      icon: <HiCheckCircle />,
      color: "green",
    },

    {
      title: "Bugs",
      value: dashboardStats.openBugs,
      subtitle: "Open Bugs",
      icon: <HiBugAnt />,
      color: "red",
    },

    {
      title: "Employees",
      value: dashboardStats.employees,
      subtitle: "Active Members",
      icon: <HiUsers />,
      color: "purple",
    },

  ];

  /* =========================
      RECENT TASKS
  ========================= */

  const recentTasks = [

    {
      title: "Login API",
      assignedTo: "Rahul",
      priority: "High",
      status: "In Progress",
    },

    {
      title: "Payment Gateway",
      assignedTo: "Priya",
      priority: "Medium",
      status: "Testing",
    },

    {
      title: "Dashboard UI",
      assignedTo: "David",
      priority: "Low",
      status: "Completed",
    },

    {
      title: "User Management",
      assignedTo: "John",
      priority: "High",
      status: "Pending",
    },

  ];

  /* =========================
      RECENT ACTIVITY
  ========================= */

  const recentActivity = [

    {
      user: "Rahul",
      action: "Created CRM Project",
      time: "2 min ago",
    },

    {
      user: "Priya",
      action: "Completed Task #45",
      time: "8 min ago",
    },

    {
      user: "John",
      action: "Resolved Bug #17",
      time: "12 min ago",
    },

    {
      user: "David",
      action: "Added New Employee",
      time: "25 min ago",
    },

  ];

  /* =========================
      ACTIVE PROJECTS
  ========================= */

  const activeProjects = [

    {
      name: "CRM Portal",
      progress: "82%",
      status: "On Track",
    },

    {
      name: "Inventory System",
      progress: "64%",
      status: "Delayed",
    },

    {
      name: "HRMS",
      progress: "91%",
      status: "Testing",
    },

  ];

  /* =========================
      TEAM PERFORMANCE
  ========================= */

  const teamPerformance = [

    {
      name: "Rahul",
      tasks: 12,
    },

    {
      name: "Priya",
      tasks: 9,
    },

    {
      name: "John",
      tasks: 7,
    },

    {
      name: "David",
      tasks: 10,
    },

  ];

  /* =========================
      UPCOMING DEADLINES
  ========================= */

  const deadlines = [

    {
      project: "CRM Portal",
      due: "Tomorrow",
    },

    {
      project: "Inventory API",
      due: "18 Jul",
    },

    {
      project: "Dashboard UI",
      due: "20 Jul",
    },

  ];

  const today = new Date().toLocaleDateString("en-GB", {

    day: "2-digit",

    month: "short",

    year: "numeric",

  });

  return (

    <div className="dashboard">

      {/* =========================
          HEADER
      ========================= */}

      <div className="dashboard-header">

        <div>

          <h2>Dashboard</h2>

          <p>Project Delivery Overview</p>

        </div>

        <div className="dashboard-date">

          <HiCalendarDays />

          <span>{today}</span>

        </div>

      </div>

      {/* =========================
          KPI CARDS
      ========================= */}

      <section className="stats-grid">

        {cards.map((card) => (

          <div className="stat-card" key={card.title}>

            <div className={`stat-icon ${card.color}`}>

              {card.icon}

            </div>

            <h2>{card.value}</h2>

            <h4>{card.title}</h4>

            <p>

              <HiArrowTrendingUp className="trend-icon" />

              {card.subtitle}

            </p>

          </div>

        ))}

      </section>
            {/* =========================
          MAIN GRID
      ========================= */}

      <section className="dashboard-grid">

        {/* =========================
            RECENT TASKS
        ========================= */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Recent Tasks</h3>

            <button>View All</button>

          </div>

          <div className="task-list">

            {recentTasks.map((task) => (

              <div className="task-item" key={task.title}>

                <div className="task-left">

                  <strong>{task.title}</strong>

                  <span>Assigned to {task.assignedTo}</span>

                </div>

                <div className="task-right">

                  <span className={`priority ${task.priority.toLowerCase()}`}>

                    {task.priority}

                  </span>

                  <small>{task.status}</small>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* =========================
            RECENT ACTIVITY
        ========================= */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Recent Activity</h3>

            <button>View All</button>

          </div>

          <div className="activity-list">

            {recentActivity.map((activity, index) => (

              <div className="activity-item" key={index}>

                <div className="activity-icon">

                  <HiBolt />

                </div>

                <div className="activity-content">

                  <strong>{activity.user}</strong>

                  <p>{activity.action}</p>

                </div>

                <small>{activity.time}</small>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* =========================
          SECOND GRID
      ========================= */}

      <section className="dashboard-grid">

        {/* =========================
            ACTIVE PROJECTS
        ========================= */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Active Projects</h3>

            <button>View All</button>

          </div>

          <div className="project-list">

            {activeProjects.map((project) => (

              <div className="project-item" key={project.name}>

                <div className="project-details">

                  <strong>{project.name}</strong>

                  <span>{project.status}</span>

                </div>

                <div className="project-progress">

                  <div className="progress-bar">

                    <div
                      className="progress-fill"
                      style={{ width: project.progress }}
                    ></div>

                  </div>

                  <small>{project.progress}</small>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* =========================
            TEAM PERFORMANCE
        ========================= */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Team Performance</h3>

            <button>View All</button>

          </div>

          <div className="team-list">

            {teamPerformance.map((member) => (

              <div className="team-item" key={member.name}>

                <div className="team-avatar">

                  {member.name.charAt(0)}

                </div>

                <div className="team-details">

                  <strong>{member.name}</strong>

                  <span>{member.tasks} Tasks Assigned</span>

                </div>

                <HiUserGroup className="team-icon" />

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* =========================
    THIRD GRID
      ========================= */}

    <section className="third-grid">

    {/* Upcoming Deadlines */}

    <div className="dashboard-card">

      <div className="card-header">

        <h3>Upcoming Deadlines</h3>

        <button>View All</button>

      </div>

      <div className="deadline-list">

        {deadlines.map((item) => (

        <div className="deadline-item" key={item.project}>

          <div className="deadline-info">

            <strong>{item.project}</strong>

            <span>Due Date</span>

          </div>

          <div className="deadline-date">

            {item.due}

          </div>

        </div>

      ))}

    </div>

    </div>

    {/* Quick Actions */}

       <div className="dashboard-card">

        <div className="card-header">

          <h3>Quick Actions</h3>

        </div>

        <div className="quick-actions">

        <button className="action-btn">
              + New Project
        </button>

        <button className="action-btn">
              + New Task
        </button>

        <button className="action-btn">
              + Add Employee
        </button>

        <button className="action-btn">
              + Report Bug
        </button>

      </div>

    </div>

    </section>
  </div>
  );
}
export default Dashboard;