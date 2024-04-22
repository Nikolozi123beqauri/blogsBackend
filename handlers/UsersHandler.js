const User = require("../models/userModel");

exports.getOneUser = async (req, res) => {
  try {
    const FoundUser = await User.findById(req.params.userId);
    res.json({
      status: "succes",
      data: {
        user: FoundUser,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      data: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.json({
      status: "succes",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserHandler = async (req, res) => {
  try {
    await User.deleteOne({
      id: req.params.userId,
    });
    res.json({
      status: "succes",
      message: "deleted",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
  }
};

exports.loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    if (password === user.Password) {
      res.json({ status: "success", data: user });
    } else {
      res.status(401).json({ status: "error", message: "Invalid password" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.registerHandler = async (req, res) => {
  const newUser = new Blog({
    ...req.body,
  });

  try {
    await newUser.save();
    res.json({
      succes: true,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      status: "error",
      data: error.message,
    });
  }
};
