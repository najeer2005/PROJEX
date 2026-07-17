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

  function handleSearch(e) {

  const value = e.target.value;

  setSearch(value);

  console.log("Searching:", value);

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

          <HiMagnifyingGlass className="search-icon" />

          <input
            type="text"
            placeholder="Search projects, tasks, employees..."
            value={search}
            onChange={handleSearch}
          />

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

            <button onClick={() => navigate("/projects")}>
                📁 New Project
            </button>

            <button onClick={() => navigate("/tasks")}>
                ✅ New Task
            </button>

            <button onClick={() => navigate("/employees")}>
                👤 New Employee
            </button>

            <button onClick={() => navigate("/teams")}>
                👥 New Team
            </button>

            <button onClick={() => navigate("/bugs")}>
                🐞 Report Bug
            </button>

            <button onClick={() => navigate("/calendar")}>
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

        <button className="icon-btn">

          <HiCog6Tooth />
        
        </button>
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
            <button className="dropdown-item">Logout</button>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}

export default TopNavbar;