const express = require('express');
const app = express();
const cors = require('cors');
var userRoutes = require('./userRoute');
const middleware = require("./middleware/logger")

app.use(cors());

app.use('/api/v1', middleware.logger, userRoutes);

module.exports = app;