import "./TopNavbar.css";
import { useContext,useState,useRef,useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

import {
  HiBars3,
  HiMagnifyingGlass,
  HiBell,
  HiCog6Tooth,
  HiChevronDown,
  HiPlus,
} from "react-icons/hi2";

function TopNavbar() {
  

  const { search, setSearch } = useContext(SearchContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const [showNewMenu, setShowNewMenu] = useState(false);
  const newMenuRef = useRef(null);


const [notifications] = useState([
    { id: 1, message: "New task assigned to you." },
    { id: 2, message: "Project deadline approaching." },
    { id: 3, message: "New comment on your task." },
  ]);

  function handleSearch() {
    const query = (search || "").trim().toLowerCase();

    if (query === "projects") {
      navigate("/projects");
    } else if (query === "tasks") {
      navigate("/tasks");
    } else if (query === "employees") {
      navigate("/employees");
    } else if (query === "teams") {
      navigate("/teams");
    } else if (query === "bugs" || query === "bugreport") {
      navigate("/bugs");
    } else if (query === "reports") {
      navigate("/reports");
    } else if (query === "calendar" || query === "calender") {
      navigate("/calendar");
    } else {
      navigate("/dashboard");
    }

    console.log("Searching:", query);
  }

  return (
    <header className="top-navbar">

      {/* LEFT */}

      <div className="nav-left">

        <button className="menu-btn">

          <HiBars3 />

        </button>

        <h2 className="page-title">

          Welcome Back

        </h2>

      </div>

      {/* CENTER */}

      <div className="nav-center">

        <div className="search-box">

          <input
            type="text"
            placeholder="Search projects, tasks, employees..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={handleSearch}><HiMagnifyingGlass className="search-icon"/></button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="nav-right">

        <div className="new-wrapper" ref={newMenuRef}>

        <button className="new-btn"
        onClick={() => setShowNewMenu(!showNewMenu)}
        >

        <HiPlus />

        New

        </button>

        {showNewMenu && (

        <div className="new-dropdown">

            <button onClick={() => navigate("/projects/newproject")}>
                📁 New Project
            </button>

            <button onClick={() => navigate("/tasks/new")}>
                ✅ New Task
            </button>

            <button onClick={() => navigate("/employees/new")}>
                👤 New Employee
            </button>

            <button onClick={() => navigate("/teams/new")}>
                👥 New Team
            </button>

            <button onClick={() => navigate("/bugs/new")}>
                🐞 Report Bug
            </button>

            <button onClick={() => navigate("/reports/new")}>
                📊 New Report
            </button>

            <button onClick={() => navigate("/calendar/new")}>
                📅 New Event
            </button>

          </div>
    )}

</div>

        <button className="icon-btn"
        onClick={() => setShowNotifications(!showNotifications)}
        >

          <HiBell />

          <span className="notification-dot">
            {notifications.length}
          </span>

        </button>
        {showNotifications && (

    <div className="notification-dropdown">

        <h4>Notifications</h4>

        {notifications.length === 0 ? (

            <p>No Notifications</p>

        ) : (

            notifications.map((item) => (

                <div
                    key={item.id}
                    className="notification-item"
                >
                    {item.message}
                </div>

            ))

        )}

    </div>

)}

       
      <div className="profile-wrapper" ref={profileRef}>
        <button className="profile-btn"
        onClick={() => setShowProfile(!showProfile)}
        >

          <div className="avatar">

            NK

          </div>

          <HiChevronDown className="dropdown-icon" />

        </button>
        {showProfile && (
          <div className="profile-dropdown">
            <button className="dropdown-item">Profile</button>
            <button className="dropdown-item">Settings</button>
            <button className="dropdown-item" onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login", { replace: true });
            }}>Logout</button>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}

export default TopNavbar;