import user from "../models/registerModel.js";
import route from "../routes/registerRoutes.js";


async function register(req, res) {
  try {
    const User = await user.create(req.body);
    res.status(201).json(User);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export default register;
