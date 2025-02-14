const Patient = require('../models/Patient');



exports.addPatient = async (req, res, next) => {
  try {
    const { name, age, address } = req.body;

    const patient = await Patient.create({ name, age, address });
    res.status(201).json(patient);
  } catch (error) {
    next(error);
  }
};



exports.getPatientDetails = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    next(error);
  }
};
