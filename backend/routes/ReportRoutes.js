import express from "express";
import { createReport, updateReport, deleteReport, getReports, getReportByID } from "../controllers/ReportController.js";       

const router = express.Router();

router.post("/add", createReport);
router.put("/update/:id", updateReport);
router.delete("/delete/:id", deleteReport);
router.get("/", getReports);
router.get("/:id", getReportByID);

export default router;
