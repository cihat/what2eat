const express = require('express')
const router = express.Router()

const ingredientController = require('../controllers/ingredient')

// Get a ingredient
router.get('/:id', ingredientController.getIngredient)

// update ingredient
router.patch('/:id', ingredientController.updateIngredient)

// Delete a ingredient
router.delete('/:id', ingredientController.deleteIngredient)

// Create a ingredient
router.post('/', ingredientController.createIngredient)

module.exports = router
