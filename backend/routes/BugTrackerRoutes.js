import express from "express";
import { createBugReport, 
    getBugReports, 
    updateBugReport,
    deleteBugReport, 
    getBugReportById } from "../controllers/BugTrackerControler.js";
  


const router = express.Router();
router.post("/add", createBugReport);
router.get("/", getBugReports);
router.put("/update/:id", updateBugReport);
router.delete("/delete/:id", deleteBugReport);
router.get("/get/:id", getBugReportById);

export default router;