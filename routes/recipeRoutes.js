const express = require("express");
const route = express.Router();

const {
  createRecipe,
  getAllRecipes,
  deleteRecipe,
} = require("../controllers/recipe-controllers");

const checkAuth = require("../middleware/auth");

route.use(checkAuth);

route.post("/", createRecipe);

route.get("/", getAllRecipes);

route.delete("/:id", deleteRecipe);

module.exports = route;
