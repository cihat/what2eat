const BaseService = require('./base-service')
const Dinner = require('../models/dinner')

class DinnerService extends BaseService {
  async findDinner(id) {
    const dinner = await this.find(id)

    return dinner
  }

  async updateDinner(id, dinner) {
    const updatedDinner = await this.update(id, dinner)

    return updatedDinner
  }

  async deleteDinner(id) {
    const deletedDinner = await this.remove(id)

    return deletedDinner
  }

  async createDinner(dinner) {
    const newDinner = await this.insert(dinner)

    return newDinner
  }

  async recommendDinner({ ingredients }) {
    const dinners = await this.load()
    const dinnersWithIngredients = dinners.filter(dinner => {
      return dinner.ingredients.every(ingredient => {
        return ingredients.includes(ingredient)
      })
    })

    const otherRecommend = dinners.filter(dinner => {
      return dinner.ingredients.some(ingredient => {
        return ingredients.includes(ingredient)
      })
    })

    return [...dinnersWithIngredients, ...otherRecommend]
  }
}

module.exports = new DinnerService(Dinner)
