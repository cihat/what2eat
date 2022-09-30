const Dinner = require('../models/dinner')
const { dinnerService } = require('../services')

exports.getDinners = async (req, res, next) => {
  try {
    const dinners = await dinnerService.findDinners()
    res.json(dinners)
  } catch (e) {
    next(e)
  }
}

exports.getDinner = async (req, res, next) => {
  try {
    const dinner = await dinnerService.findDinner(req.params.id)
    res.json(dinner)
  } catch (e) {
    next(e)
  }
}

exports.updateDinner = async (req, res, next) => {
  try {
    const dinner = await dinnerService.updateDinner(req.params.id, req.body)
    res.json(dinner)
  } catch (e) {
    next(e)
  }
}

exports.deleteDinner = async (req, res, next) => {
  try {
    await dinnerService.deleteDinner(req.params.id)
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
}

exports.createDinner = async (req, res, next) => {
  try {
    const dinner = await dinnerService.createDinner(req.body)
    res.json(dinner)
  } catch (e) {
    next(e)
  }
}

exports.recommendDinner = async (req, res, next) => {
  try {
    const dinner = await dinnerService.recommendDinner(req.body)
    res.json(dinner)
  } catch (e) {
    next(e)
  }
}
