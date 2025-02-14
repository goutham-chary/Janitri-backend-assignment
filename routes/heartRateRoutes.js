const express = require('express');
const { addHeartRate, getHeartRates } = require('../controllers/heartRateController');
const router = express.Router();

router.post('/', addHeartRate);
router.get('/:patientId', getHeartRates);

module.exports = router;
