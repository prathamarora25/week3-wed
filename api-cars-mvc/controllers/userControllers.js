const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

const getUserById = (req, res) => {
  const user = User.getById(req.params.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const user = User.addOne({ ...req.body });

  res.status(201).json(user);
};

const updateUser = (req, res) => {
  const user = User.updateOne(req.params.userId, { ...req.body });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const deleteUser = (req, res) => {
  const user = User.deleteOne(req.params.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
