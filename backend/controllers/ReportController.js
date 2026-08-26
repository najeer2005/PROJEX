import mongoose from "mongoose";
import Reports from "../models/ReportsModel.js";


export async function generateReport(req, res) {
    try {
        const report = await Reports.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export async function getReports(req, res) {
    try {
        const reports = await Reports.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export async function getReportByID(req, res) {
    try {
        const report = await Reports.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export async function updateReport(req, res) {
    try {
        const report = await Reports.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};
export async function deleteReport(req, res) {
    try {
        const report = await Reports.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Report deleted successfully", report });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};