/**
 * Created by kevinkreuzer on 24.01.17.
 */
import {expect, assert} from 'chai';
import sut from './index.js';
const allCharacterNames = require('./harryPotter.charcters.names.json');
const allBeastNames = require('./harryPotter.beast.names.json');

describe('Harry Potter Names', function() {

    describe('Harry Potter Character names', () => {

        it('should have a list of all available character names', () => {
            expect(isArrayOfStrings(sut.all)).to.be.true;
            assert.equal(sut.all, allCharacterNames);
        });

        it('should allow me to get a random character name from the list', () => {
            const random = sut.random();
            expect(allCharacterNames).to.include(random);
        });
    });

    describe('Harry Potter Beast names', () => {

        it('should have a list of all available beasts', () => {
            expect(isArrayOfStrings(sut.allBeasts)).to.be.true;
            assert.equal(sut.allBeasts, allBeastNames);
        });

        it('should allow me to get a random beast from the list', () => {
            const random = sut.randomBeast();
            expect(allBeastNames).to.include(random);
        });
    });

    function isArrayOfStrings(array) {
        return array.every(function(name) {
            return typeof name === 'string';
        });
    }
});
