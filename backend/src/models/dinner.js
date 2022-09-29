const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const dinnerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 1024,
  },
  image: {
    type: String,
    minlength: 2,
    maxlength: 1024,
  },
  category: {
    type: String,
    minlength: 2,
    maxlength: 256,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    autopopulate: true,
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
      autopopulate: true,
    },
  ],
  recipe: [
    {
      type: String,
    },
  ],
  numberOfServings: Number,
})

dinnerSchema.plugin(autopopulate)

module.exports = mongoose.model('Dinner', dinnerSchema)
