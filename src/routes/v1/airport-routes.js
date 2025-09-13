const express = require('express');
const airportController = require('../../controllers/airport-controller');
const router=express.Router();
router.post('/airport', airportController.create);
router.get('/airport/:id', airportController.get);
router.delete('/airport/:id', airportController.destroy);
router.patch('/airport/:id', airportController.update);

module.exports = router;