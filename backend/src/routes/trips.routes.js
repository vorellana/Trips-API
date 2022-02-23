const { Router } = require('express');
const router = Router();
const { getTrips } = require('../controllers/trips.controller')
const morgan = require('morgan')

const base = '/api/trips/v1';

router.get(base, morgan('combined'), getTrips);

module.exports = router;