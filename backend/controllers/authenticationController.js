import jwt from "jsonwebtoken";
import User from "../models/registerModel.js";

const generateToken = (user) => {
  return jwt.sign(
    {
      username: user.fullName || user.officialEmail,
      email: user.officialEmail,
      userId: user._id,
    },
    process.env.JWT_SECRET || "projex-secret-key"
  );
};

export const registerUser = async (req, res) => {
  try {
    const { fullName, employeeId, employeeID, officialEmail, phoneNumber, password } = req.body;

    const sanitizedUser = {
      fullName,
      employeeID: employeeID || employeeId,
      officialEmail,
      phoneNumber,
      password,
    };

    const existingUser = await User.findOne({ officialEmail: sanitizedUser.officialEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create(sanitizedUser);
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.fullName,
        email: user.officialEmail,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { officialEmail, password } = req.body;

    const user = await User.findOne({ officialEmail });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        username: user.fullName,
        email: user.officialEmail,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logoutUser = (req, res) => {
  return res.status(200).json({ message: "Logged out successfully" });
};

export default { registerUser, loginUser, logoutUser };
