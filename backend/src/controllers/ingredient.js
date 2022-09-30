const Ingredient = require('../models/ingredient');
const { ingredientService } = require('../services');

exports.getIngredient = async (req, res, next) => {
  try {
    const ingredient = await ingredientService.findIngredient(req.params.id);
    res.json(ingredient);
  } catch (e) {
    next(e);
  }
}

exports.updateIngredient = async (req, res, next) => {
  try {
    const ingredient = await ingredientService.updateIngredient(req.params.id, req.body);
    res.json(ingredient);
  } catch (e) {
    next(e);
  }
}

exports.deleteIngredient = async (req, res, next) => {
  try {
    await ingredientService.deleteIngredient(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

exports.createIngredient = async (req, res, next) => {
  try {
    const ingredient = await ingredientService.createIngredient(req.body);
    res.json(ingredient);
  } catch (e) {
    next(e);
  }
}
