import uniqueRandomArray from 'unique-random-array';
const harryPotterCharacterNames = require('./harryPotter.charcters.names.json');
const harryPotterBeastNames = require('./harryPotter.beast.names.json');

const PUBLIC_API = {
    all: harryPotterCharacterNames,
    random: uniqueRandomArray(harryPotterCharacterNames),
    allBeasts: harryPotterBeastNames,
    randomBeast: uniqueRandomArray(harryPotterBeastNames)
};

export default PUBLIC_API;
module.exports = PUBLIC_API;
