const express = require('express');
const flightController = require('../../controllers/flight-controllers');
const {flightMiddelware} = require('../../middleware/index')
const router = express.Router();

router.post('/flights',flightMiddelware,flightController.create);
router.get('/flights',flightController.getAll)

module.exports = router;
