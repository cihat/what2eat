const express = require('express')

const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/user')

const preventLoginForLoggedInUsers = (req, res, next) => {
  next(req.user && new Error('User is already logged in'))
}

// const isEmailVerified = async (req, res, next) => {
//   const isVerified = await User.exists({
//     email: req.body.email,
//     isVerified: true,
//   })

//   if (!isVerified) {
//     return res.status(403).send({
//       type: 'verification-required',
//       email: req.body.email,
//       message: 'Please make sure you have verified your email.',
//     })
//   }

//   next()
// }

// Check if user is logged in
router.get('/', userController.login)

// Register
router.post('/register', userController.register)

// Login
router.post(
  '/session',
  preventLoginForLoggedInUsers,
  passport.authenticate('local', {
    failWithError: true,
  }),
  async (req, res) => {
    res.send(req.user)
  },
  (err, req, res, next) => {
    if (err.status != 401) return next(err)

    next(
      new Error('The username and password you provided did not match out records. Please double-check and try again.')
    )
  }
)

// Logout
router.delete('/session', userController.logout)

module.exports = router
