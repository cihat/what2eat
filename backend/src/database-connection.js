require('dotenv').config()
const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/your-project-name'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection established successfully. 🎉'))
  .catch(error => console.log('not connected:', error))

module.exports = mongoose.connection
