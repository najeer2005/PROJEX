import mongoose from "mongoose";
import EMP from "../models/EmployeesModel.js";  


export async function getEmployees(req, res) {
    try {
        const employees = await EMP.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};
 export async function createEmployee(req, res) {
    try {
        const employee = await EMP.create(req.body);
        res.status(201).json({
            msg : "Employee added",
            employee
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};
export async function updateEmployee(req, res) {
    try{
        const { id } = req.params;
        const employee = await EMP.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            msg : "Employee updated",
            employee
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};
export async function deleteEmployee(req, res) {
    try{
        const { id } = req.params;
        await EMP.findByIdAndDelete(id);
        res.status(200).json({ msg: "Employee deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};