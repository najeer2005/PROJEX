import "./TopNavbar.css";
import { useState } from "react";

import {
  HiBars3,
  HiMagnifyingGlass,
  HiBell,
  HiCog6Tooth,
  HiChevronDown,
  HiPlus,
} from "react-icons/hi2";

function TopNavbar() {
  const [search, setSearch] = useState("");

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
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="nav-right">

        <button className="new-btn">

          <HiPlus />

          New

        </button>

        <button className="icon-btn">

          <HiBell />

          <span className="notification-dot"></span>

        </button>

        <button className="icon-btn">

          <HiCog6Tooth />

        </button>

        <button className="profile-btn">

          <div className="avatar">

            NK

          </div>

          <HiChevronDown className="dropdown-icon" />

        </button>

      </div>

    </header>
  );
}

export default TopNavbar;