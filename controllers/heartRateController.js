const HeartRate = require('../models/HeartRate');



exports.addHeartRate = async (req, res, next) => {
  try {
    const { patientId, rate } = req.body;

    const heartRate = await HeartRate.create({ patientId, rate });
    res.status(201).json(heartRate);
  } catch (error) {
    next(error);
  }
};



exports.getHeartRates = async (req, res, next) => {
  try {
    const heartRates = await HeartRate.find({ patientId: req.params.patientId });
    res.status(200).json(heartRates);
  } catch (error) {
    next(error);
  }
};
