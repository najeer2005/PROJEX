import express from "express";
import { createProject,updateProject,deleteProject,getProjects} from "../controllers/projectsControler.js";




const route = express.Router();
route.post("/add", createProject);
route.put("/update/:id", updateProject);
route.delete("/delete/:id", deleteProject);
route.get("/",getProjects);

export default route;