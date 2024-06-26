
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
app.use(express.json())

app.use('/api', routes);

module.exports = app;
