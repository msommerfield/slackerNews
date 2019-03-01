// Require Dependencies 
const express = require('express')
const router = express.Router()

// Require Controllers
const slackerController = require('../controllers/slackerController.js')



router.get('/', slackerController.index)
router.get('/new', slackerController.new)
router.post('/', slackerController.create)
router.get('/:slackId', slackerController.show)
router.get('/:slackId/edit', slackerController.edit)
router.put('/:slackId', slackerController.update)
router.delete('/:slackId', slackerController.delete)










module.exports=router