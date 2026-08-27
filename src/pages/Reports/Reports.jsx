import "./Reports.css";
import { useEffect, useState } from "react";
import ReportForm from "./ReportForm";
import { apiFetch } from "../../api/api";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiDocumentChartBar,
  HiFolderOpen,
  HiClipboardDocumentList,
  HiBugAnt,
  HiEye,
  HiArrowDownTray,
  HiTrash,
} from "react-icons/hi2";

function Reports() {

  /* =========================
      REPORT STATISTICS
  ========================= */

  const [reports, setReports] = useState([]);
  const reportStats = {
    total: reports.length,
    projectReports: reports.filter((report) => report.Category === "Project").length,
    taskReports: reports.filter((report) => report.Category === "Task").length,
    bugReports: reports.filter((report) => report.Category === "Bug").length,
  };

  /* =========================
      REPORT DATA
  ========================= */

  const [search,setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ReportName: "", Category: "Project", GeneratedBy: "", Date: "", Status: "Pending", reportFile: null });
  const handleChange = (event) => setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const fetchReports = async () => {
    try {
      const response = await apiFetch("http://localhost:5000/reports");
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to load reports");
      setReports(data);
    } catch (error) { console.error(error); }
  };
  useEffect(() => { fetchReports(); }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") payload.append(key, value);
      });
      const response = await apiFetch("http://localhost:5000/reports/add", { method: "POST", body: payload });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to generate report");
      setShowForm(false);
      setFormData({ ReportName: "", Category: "Project", GeneratedBy: "", Date: "", Status: "Pending", reportFile: null });
      fetchReports();
    } catch (error) { alert(error.message); } finally { setLoading(false); }
  };
  const handleDelete = async (reportId) => {
    if (!window.confirm("Delete this report?")) return;
    try {
      const response = await apiFetch(`http://localhost:5000/reports/delete/${reportId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete report");
      setReports((previous) => previous.filter((report) => report._id !== reportId));
    } catch (error) { alert(error.message); }
  };
  const filteredReports = reports.filter((report) => {
    const keyword = search.trim().toLowerCase();
    return [report.ReportName, report.Category, report.GeneratedBy, report.Status].some((value) => (value || "").toLowerCase().includes(keyword)) &&
      (!categoryFilter || report.Category === categoryFilter) &&
      (!statusFilter || report.Status === statusFilter);
  });
    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Reports</h2>

          <p>Generate and manage project performance reports.</p>

        </div>

        <button className="primary-btn" onClick={() => setShowForm(true)}>

          <HiPlus />

          Generate Report

        </button>

      </div>

      {showForm && (
        <ReportForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
          loading={loading}
          onFileChange={(event) => setFormData((previous) => ({ ...previous, reportFile: event.target.files[0] || null }))}
        />
      )}

      {/* =========================
          REPORT STATISTICS
      ========================= */}

      <section className="report-stats">

        <div className="report-stat-card">

          <HiDocumentChartBar />

          <div>

            <h3>{reportStats.total}</h3>

            <span>Total Reports</span>

          </div>

        </div>

        <div className="report-stat-card">

          <HiFolderOpen />

          <div>

            <h3>{reportStats.projectReports}</h3>

            <span>Project Reports</span>

          </div>

        </div>

        <div className="report-stat-card">

          <HiClipboardDocumentList />

          <div>

            <h3>{reportStats.taskReports}</h3>

            <span>Task Reports</span>

          </div>

        </div>

        <div className="report-stat-card">

          <HiBugAnt />

          <div>

            <h3>{reportStats.bugReports}</h3>

            <span>Bug Reports</span>

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
            placeholder="Search report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        </div>

        <div className="filters">

          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>

            <option value="">All Categories</option>

            <option value="Project">Project</option>

            <option value="Task">Task</option>

            <option value="Bug">Bug</option>

            <option value="Employee">Employee</option>

          </select>

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>

            <option value="">All Status</option>

            <option value="Generated">Generated</option>

            <option value="Pending">Pending</option>

          </select>

        </div>

      </div>

      {/* =========================
          REPORT TABLE
      ========================= */}

      <div className="table-card">

        <table>

          <thead>

            <tr>

              <th>Report Name</th>

              <th>Category</th>

              <th>Generated By</th>

              <th>Date</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>
                        {filteredReports.map((report) => (

              <tr key={report._id}>

                <td>

                  <div className="report-info">

                    <div className="report-avatar">

                      <HiDocumentChartBar />

                    </div>

                    <div>

                      <strong>{report.ReportName}</strong>

                    </div>

                  </div>

                </td>

                <td>{report.Category}</td>

                <td>{report.GeneratedBy}</td>

                <td>{report.Date ? new Date(report.Date).toLocaleDateString() : "-"}</td>

                <td>

                  <span
                    className={`status ${(report.Status || "")
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >

                    {report.Status}

                  </span>

                </td>

                <td>

                  <button className="action view">

                    <HiEye />

                  </button>

                  <button className="action download">

                    <HiArrowDownTray />

                  </button>

                  <button className="action delete" onClick={() => handleDelete(report._id)} aria-label={`Delete ${report.ReportName}`}>

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

export default Reports;