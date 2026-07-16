import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
    HiHome,
    HiFolder,
    HiClipboardDocumentList,
    HiUsers,
    HiUserGroup,
    HiBugAnt,
    HiChartBar,
    HiCalendarDays,
    HiCog6Tooth,
    HiArrowLeftOnRectangle
} from "react-icons/hi2";

function Sidebar() {

    return (

        <aside className="sidebar">

            {/* LOGO */}

            <div className="sidebar-logo">

                <h2>PROJEX</h2>

                <p>Project Management System</p>

            </div>

            {/* MAIN */}

            <div className="sidebar-section">

                <h4>MAIN</h4>

                <NavLink
                    to="/dashboard"
                    className="sidebar-link"
                >
                    <HiHome />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/projects"
                    className="sidebar-link"
                >
                    <HiFolder />
                    <span>Projects</span>
                </NavLink>

                <NavLink
                    to="/tasks"
                    className="sidebar-link"
                >
                    <HiClipboardDocumentList />
                    <span>Tasks</span>
                </NavLink>

                <NavLink
                    to="/employees"
                    className="sidebar-link"
                >
                    <HiUsers />
                    <span>Employees</span>
                </NavLink>

                <NavLink
                    to="/teams"
                    className="sidebar-link"
                >
                    <HiUserGroup />
                    <span>Teams</span>
                </NavLink>

            </div>

            {/* MANAGEMENT */}

            <div className="sidebar-section">

                <h4>MANAGEMENT</h4>

                <NavLink
                    to="/bugs"
                    className="sidebar-link"
                >
                    <HiBugAnt />
                    <span>Bug Tracker</span>
                </NavLink>

                <NavLink
                    to="/reports"
                    className="sidebar-link"
                >
                    <HiChartBar />
                    <span>Reports</span>
                </NavLink>

                <NavLink
                    to="/calendar"
                    className="sidebar-link"
                >
                    <HiCalendarDays />
                    <span>Calendar</span>
                </NavLink>

            </div>

            {/* SETTINGS */}

            <div className="sidebar-section">

                <h4>SETTINGS</h4>

                <NavLink
                    to="/settings"
                    className="sidebar-link"
                >
                    <HiCog6Tooth />
                    <span>Settings</span>
                </NavLink>

                <NavLink
                    to="/login"
                    className="sidebar-link logout"
                >
                    <HiArrowLeftOnRectangle />
                    <span>Logout</span>
                </NavLink>

            </div>

        </aside>

    );

}

export default Sidebar;