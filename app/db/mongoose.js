// uruchamianie polaczenia z BD
const mongoose = require('mongoose');
const { databaseURL } = require('../config');

mongoose.connect(databaseURL);