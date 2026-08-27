import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import tasksRoutes from "./routes/TasksRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import teamsRoutes from "./routes/teamsRoutes.js";
import BugTrackerRoutes from "./routes/BugTrackerRoutes.js";
import EmployeeRoutes from "./routes/EmployeeRoutes.js";
import ReportRoutes from "./routes/ReportRoutes.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";


dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 PROJEX Backend is Running...");
});


// Public routes
app.use("/auth", authenticationRoutes);
app.use("/register", registerRoutes);

// Protected routes
app.use(authMiddleware);
app.use("/tasks", tasksRoutes);
app.use("/projects",projectsRoutes);
app.use("/teams", teamsRoutes);
app.use("/bugreports",BugTrackerRoutes);
app.use("/employees",EmployeeRoutes);
app.use("/reports", ReportRoutes);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start accepting requests only after the database is ready.
const PORT = process.env.PORT || 5000;

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`✅ Server running on Port ${PORT}`);
    });
}

startServer();
