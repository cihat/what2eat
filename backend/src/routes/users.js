require('dotenv').config()
const express = require('express')
const router = express.Router()
const passport = require('passport')

const userController = require('../controllers/user')
const User = require('../models/user')
const rateLimiter = require('../lib/rate-limiter')

const preventLoginForLoggedInUsers = (req, res, next) => {
  next(req.user && new Error('User is already logged in'))
}

// Check if user is logged in
router.get(
  '/',
  // rateLimiter({ points: 50, duration: 10 * 60 }),
  userController.login
)

// Register
router.post(
  '/register',
  // rateLimiter({ points: 5, duration: 30 * 60 }),
  userController.register
)

router.get(
  '/email-verification',
  // rateLimiter({ points: 5, duration: 15 * 60 }),
  async (req, res, next) => {
    if (!req.query.token) return next({ status: 400 })

    try {
      await User.verifyEmailByToken(req.query.token)
    } catch (e) {
      return res.redirect(`${process.env.FRONTEND_BASE_PATH}/login?verifyFail=1`)
    }

    res.redirect(`${process.env.FRONTEND_BASE_PATH}/login?verifySuccess=1`)
  }
)

router.post(
  '/outgoing-verification-emails',
  rateLimiter({
    points: 1,
    duration: 2 * 60,
    message: 'You can only attempt to send email once every 2 minutes.',
  }),
  async (req, res, next) => {
    if (!req.body.email) return next({ status: 400 })

    const user = await User.findOne({
      email: req.body.email,
      isVerified: false,
    })

    if (!user) return next({ status: 422 })

    await user.sendVerificationEmail()

    res.sendStatus(200)
  }
)

// Login
router.post(
  '/session',
  // rateLimiter({ points: 10, duration: 30 * 60 }),
  preventLoginForLoggedInUsers,
  userController.isEmailVerified,
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
router.delete('/session', rateLimiter({ points: 50, duration: 10 * 60 }), userController.logout)

module.exports = router
