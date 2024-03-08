const RecipeModel = require("../models/RecipeModel");
const { BadRequest } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createRecipe = async (req, res) => {
  const { title, recipeId, image } = req.body;
  if (!title || !recipeId || !image) {
    throw new BadRequest("You must provide all inputs");
  }
  const recipe = await RecipeModel.create({ title, recipeId, image });
  res.status(StatusCodes.CREATED).json({ recipe });
};

const getAllRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({});
  res.status(StatusCodes.OK).json({ recipes });
};

const deleteRecipe = async (req, res) => {
  const recipeId = req.params.id;
  const recipe = await RecipeModel.findOne({ recipeId: recipeId });

  if (!recipe) {
    throw new BadRequest("No found recipe for this id");
  }

  await recipe.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Recipe deleted." });
};

module.exports = { createRecipe, getAllRecipes, deleteRecipe };
