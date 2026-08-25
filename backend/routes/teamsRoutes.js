import express from "express";
import { createTeam, updateTeam, deleteTeam, getTeams,getTeamByID } from "../controllers/teams.js";

const router = express.Router();

router.post("/add", createTeam);
router.put("/update/:id", updateTeam);
router.delete("/delete/:id", deleteTeam);
router.get("/", getTeams);
router.get("/:id", getTeamByID);


export default router;
