const express = require('express');
const { addPatient, getPatientDetails } = require('../controllers/patientController');
const router = express.Router();

router.post('/', addPatient);
router.get('/:id', getPatientDetails);

module.exports = router;
