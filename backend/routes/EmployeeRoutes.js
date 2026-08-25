import express from "express";
import { getEmployees,
     createEmployee,
      updateEmployee, 
      deleteEmployee } from "../controllers/EmployeeControler.js";

const router = express.Router();

router.get("/", getEmployees);
router.post("/add", createEmployee);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);  
export default router;      