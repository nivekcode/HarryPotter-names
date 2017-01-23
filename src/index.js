'use strict';

var uniqueRandomArray = require('unique-random-array');
var harryPotterNames = require('./harryPotter.names.json');

module.exports = {
    all: harryPotterNames,
    random: uniqueRandomArray(harryPotterNames)
};