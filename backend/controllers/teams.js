import teams from "../models/Teams.js";

export async function createTeam(req, res) {

    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function updateTeam(req, res) {
    try {
        const team = await teams.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function deleteTeam(req, res) {
    try {
       const Team = await teams.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Team deleted successfully",Team });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export async function getTeams(req, res) {
    try {
        const Teams = await teams.find();
        res.status(200).json(Teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export async function getTeamByID(req, res) {
    try {
        const team = await teams.findById(req.params.id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } 
};   

