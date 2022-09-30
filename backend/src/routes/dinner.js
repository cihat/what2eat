const express = require('express')
const router = express.Router()

const dinnerController = require('../controllers/dinner')
const rateLimiter = require('../lib/rate-limiter')

// Get a dinner
router.get('/:id', dinnerController.getDinner)

// update dinner
router.patch('/:id', dinnerController.updateDinner)

// Delete a dinner
router.delete('/:id', dinnerController.deleteDinner)

// Create a dinner
router.post('/', dinnerController.createDinner)

router.get('/recommend', dinnerController.recommendDinner)

module.exports = router
