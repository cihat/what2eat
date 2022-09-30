import { defineStore } from 'pinia'

const useDinnerStore = defineStore('dinner', {
  state: () => ({
    ingredients: [],
  }),
  getters: {
    getIngredients: state => state.ingredients,
  },
  actions: {
    setIngredients(ingredients) {
      this.ingredients = ingredients
    }
  },
  persist: true,
})

export { useDinnerStore }
