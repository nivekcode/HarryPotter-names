import uniqueRandomArray from 'unique-random-array';
const harryPotterNames = require('./harryPotter.names.json');

const PUBLIC_API = {
    all: harryPotterNames,
    random: uniqueRandomArray(harryPotterNames)
};

export default PUBLIC_API;
module.exports = PUBLIC_API;