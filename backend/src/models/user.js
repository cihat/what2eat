const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
// const emailVerification = require('../lib/email/email-verification-plugin')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    sessionId: String,
  },
  {
    timestamps: true,
    strictPopulate: false,
  }
)

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password',
  populateFields: ['name, sessionId'],
})

// userSchema.plugin(emailVerification)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
