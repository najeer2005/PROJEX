import mongoose from "mongoose";
import BugReport from "../models/BugModel.js";

export async function createBugReport(req, res) { 
    try{
        const bugReport = await BugReport.create(req.body);
        res.status(201).json({
            msg: "Bug report created successfully",
            bugReport
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
export async function getBugReports(req, res) {
    try{
        const bugReports = await BugReport.find();
        res.status(200).json({
            msg: "Bug reports retrieved successfully",
            bugReports
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
export async function updateBugReport(req, res) {
    try{
        const bugReport = await BugReport.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            msg: "Bug report updated successfully",
            bugReport
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
export async function deleteBugReport(req, res) {
    try{
        const bugReport = await BugReport.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: "Bug report deleted successfully",
            bugReport
        });
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    };
};
export async function getBugReportById(req, res) {
    try{
        const bugReport = await BugReport.findById(req.params.id);
        res.status(200).json({
            msg: "Bug report retrieved successfully",
            bugReport
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};