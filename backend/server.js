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


dotenv.config();
connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 PROJEX Backend is Running...");
});


// Routes
app.use("/tasks", tasksRoutes);
app.use("/register", registerRoutes);
app.use("/projects",projectsRoutes);
app.use("/teams", teamsRoutes);
app.use("/bugreports",BugTrackerRoutes);
app.use("/employees",EmployeeRoutes);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on Port ${PORT}`);
});
