import route from "../routes/TasksRoutes.js";
import Task from "../models/TaskModel.js";


export async function addTask(req,res){
    try{
      const tasks = await Task.create(req.body);
      res.status(201).json(tasks);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }   

}
export async function getTasks(req,res){
    try{
      const tasks = await Task.find();
      res.status(200).json(tasks);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
} ;
export async function updateTask(req,res){
    try{
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(task);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
};
export async function deleteTask(req,res){  
    try{
      const task = await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Task deleted successfully", task });
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
};