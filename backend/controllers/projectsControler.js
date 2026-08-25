import projects from "../models/projects.js";


export async function createProject(req, res) {
    try {
    const project = await projects.create(req.body);
    res.status(201).json({
        msg:"Project added",
        project
    });
    }
    catch (error) {
    res.status(404).json({ message: error.message });
    }
}

export async function updateProject(req, res) {
    try {
        const project = await projects.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            msg: "Project updated",
            project
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function deleteProject(req, res) {
    try {
      const project=  await projects.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: "Project deleted successfully",
            project
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export async function getProjects(req,res){
    try{
        const project = await projects.find();
        res.status(200).json({
            msg :"success",
            projects:project});
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
};
