import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

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
import BugTracker from "./pages/BugTracker/BugTracker";
import Reports from "./pages/Reports/Reports";
import Calendar from "./pages/Calendar/Calendar";
import ProjectForm from "./pages/Projects/ProjectModal";
import EmployeeForm from "./pages/Employees/EmployeeForm";
import TeamForm from "./pages/Teams/TeamForm";
import TaskForm from "./pages/Tasks/TaskForm";
import ReportForm from "./pages/Reports/ReportForm";
import EventForm from "./pages/Calendar/EventForm";
import BugForm from "./pages/BugTracker/BugForm";

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

        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Protected Routes */}

        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />

          {/* Future Pages */}

          <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />

          <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />

          <Route path="/teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />

          <Route path="/bugs" element={<ProtectedRoute><BugTracker /></ProtectedRoute>} />
          <Route path="/bugs/new" element={<ProtectedRoute><BugForm /></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/calendar/new" element={<ProtectedRoute><EventForm /></ProtectedRoute>} />
          <Route path="/calender" element={<Navigate to="/calendar" replace />} />
          <Route path="/calender/newEvent" element={<Navigate to="/calendar/new" replace />} />
          <Route path="/projects/newproject" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
          <Route path="/employees/new" element={<ProtectedRoute><EmployeeForm /></ProtectedRoute>} />
          <Route path="/teams/new" element={<ProtectedRoute><TeamForm /></ProtectedRoute>} />
          <Route path="/tasks/new" element={<ProtectedRoute><TaskForm /></ProtectedRoute>} />
          <Route path="/reports/new" element={<ProtectedRoute><ReportForm /></ProtectedRoute>} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;