import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Landing from "./pages/Landingpage/Landing";
import Login from "./pages/Loginpage/Login";
import Register from "./pages/Registerpage/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Dashboard/Sidebar";
import TopNavbar from "./pages/Dashboard/TopNavbar";

import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import Employees from "./pages/Employees/Employees";
import Teams from "./pages/Teams/Teams";
import BugTracker from "./pages/Bug Tracker/BugTracker";
import Reports from "./pages/Reports/Reports";
import Calendar from "./pages/Calendar/Calendar";
import EditProject from "./pages/Projects/projectsEditer";

/* =========================
   Dashboard Layout
========================= */

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <TopNavbar />

      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/edit-project" element={<EditProject />} />

          {/* Future Pages */}

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/teams" element={<Teams />} />

          <Route path="/bugs" element={<BugTracker />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/calendar" element={<Calendar />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;