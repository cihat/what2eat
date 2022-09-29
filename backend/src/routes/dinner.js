const express = require('express')
const router = express.Router()

const dinnerController = require('../controllers/dinner')
const rateLimiter = require('../lib/rate-limiter')

// Get a dinner
router.get('/', dinnerController.getDinner)

// update dinner
router.patch('/', dinnerController.updateDinner)

// Delete a dinner
router.delete('/', dinnerController.deleteDinner)

// Create a dinner
router.post('/', dinnerController.createDinner)
