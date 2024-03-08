const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../errors");
const UserModel = require("../models/UserModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest("You must provide all inputs");
  }

  const user = await UserModel.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login");
};

const getCurentUser = async (req, res) => {
  res.send("curent user");
};

module.exports = { register, login, getCurentUser };
