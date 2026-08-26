import express from "express";
import { generateReport, updateReport, deleteReport, getReports, getReportByID } from "../controllers/ReportController.js";
import upload from "../middleware/uoload.js";

const router = express.Router();

router.post("/add", upload.single("reportFile"), generateReport);
router.put("/update/:id", updateReport);
router.delete("/delete/:id", deleteReport);
router.get("/", getReports);
router.get("/:id", getReportByID);

export default router;
