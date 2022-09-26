require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)
const { sanitize } = require('express-mongo-sanitize')
const compression = require('compression')
const { errors } = require('celebrate')
const User = require('./models/user')
const { mongooseConnection } = require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(helmet())
app.use(compression())

app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : true,
    credentials: true,
  })
)

app.use(
  session({
    store: new MongoStore({ mongooseConnection, stringify: false }),
    secret: 'thisissupposedtobeasecret',
    // saveUninitialized: false,
    // resave: false,
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV == 'production' && 'none',
      secure: process.env.NODE_ENV == 'production',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.all('*', (req, res, next) => {
  req.body = sanitize(req.body)
  req.headers = sanitize(req.headers)
  req.params = sanitize(req.params)

  next()
})

app.use('/api/', indexRouter)
app.use('/api/account', usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

app.use(errors())

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  console.log(err)

  res.status(err.status || 500)
  res.send(req.app.get('env') === 'development' ? { stack: err.stack, message: err.message } : { message: err.message })
})

module.exports = app
