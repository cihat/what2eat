const Validator = require('async-validator').default
const User = require('../models/user')
const { userService } = require('../services')

exports.register = async (req, res, next) => {
  const descriptor = {
    name: [
      {
        required: true,
        message: 'Name is required.\n',
      },
      {
        min: 2,
        message: 'Name should have a minimum length of 2 characters.\n',
      },
      {
        max: 64,
        message: 'Name should have a maximum length of 64 characters.\n',
      },
    ],
    username: [{ required: true, message: 'Username is required.\n' }],
    email: [
      { type: 'email', message: 'E-mail is not valid.\n' },
      { required: true, message: 'E-mail is required.\n' },
    ],
    password: [
      { required: true, message: 'Password is required.\n' },
      { min: 8, message: 'Password should have a minimum length of 8 characters.\n' },
      {
        pattern: /[a-zA-Z]/,
        message: 'Password should include at least one letter.\n',
      },
      { pattern: /\d/, message: 'Password should include at least one digit.\n' },
      { pattern: /[\W_]/, message: 'Password should include at least one symbol.\n' },
      { pattern: /^\S+$/, message: 'Password should not include spaces.\n' },
    ],
    passwordConfirmation: [
      { required: true, message: 'Password confirmation is required.\n' },
      {
        validator(rule, value, callback, source) {
          return source.password == value || new Error('The passwords you entered are inconsistent.\n')
        },
      },
    ],
  }

  const validator = new Validator(descriptor)

  try {
    await validator.validate(req.body.user)
  } catch ({ errors }) {
    return next({ message: errors?.map(e => e.message).join('') })
  }

  try {
    const createdUser = new User(req.body.user)

    const user = await User.register(createdUser, req.body.user.password)

    req.session.userId = user._id
    req.session.save()

    res.sendStatus(200)
  } catch (e) {
    return next(e)
  }
}

exports.login = async (req, res, next) => {
  try {
    res.send(req.user)
  } catch (error) {
    return next({
      message: 'Something went wrong while logging in.',
      status: 500,
    })
  }
}

exports.logout = async (req, res, next) => {
  try {
    await req.logout()
    res.sendStatus(200)
  } catch (error) {
    return next({
      message: 'Something went wrong while logging out.',
      status: 500,
    })
  }
}

exports.findUsers = async (req, res) => {
  res.send(await userService.load())
}

exports.findUser = async (req, res) => {
  res.send(await userService.find(req.params.id))
}
