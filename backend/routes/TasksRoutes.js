import express from "express";
import { addTask,getTasks,updateTask
,deleteTask
 } from "../controllers/TaskControler.js";

const router = express.Router();

router.post("/add", addTask);
router.get("/", getTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);



export default router;
