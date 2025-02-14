const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db');


const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const heartRateRoutes = require('./routes/heartRateRoutes');

const app = express();



app.use(bodyParser.json());


dbConnect();


app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/heartRate', heartRateRoutes);


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
