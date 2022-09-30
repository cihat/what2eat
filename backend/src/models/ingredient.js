const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
})

ingredientSchema.plugin(autopopulate)

module.exports = mongoose.model('Ingredient', ingredientSchema)
