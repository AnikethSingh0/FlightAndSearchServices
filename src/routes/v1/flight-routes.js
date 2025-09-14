const express = require('express');
const flightController = require('../../controllers/flight-controllers');

const router = express.Router();

router.post('/flights', flightController.create);
router.get('/flights',flightController.getAll)

module.exports = router;
