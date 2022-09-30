const BaseService = require('./base-service')
const Ingredient = require('../models/ingredient')

class IngredientService extends BaseService {
  async findIngredient(id) {
    const ingredient = await this.find(id)

    return ingredient
  }

  async updateIngredient(id, ingredient) {
    const updatedIngredient = await this.update(id, ingredient)

    return updatedIngredient
  }

  async deleteIngredient(id) {
    const deletedIngredient = await this.remove(id)

    return deletedIngredient
  }

  async createIngredient(ingredient) {
    const newIngredient = await this.insert(ingredient)

    return newIngredient
  }
}

module.exports = new IngredientService(Ingredient)
