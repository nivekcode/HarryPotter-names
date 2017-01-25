/**
 * Created by kevinkreuzer on 24.01.17.
 */
import {expect, assert} from 'chai';
import sut from './index.js';
const allNames = require('./harryPotter.names.json');

describe('Harry Potter names', function () {

    it('should have a list of all available names', function () {
        expect(isArrayOfStrings(sut.all)).to.be.true;
        assert.equal(sut.all, allNames);
    });

    it('should allow me to get a random name from the list', function () {
        const random = sut.random();
        expect(allNames).to.include(random);
    });

    function isArrayOfStrings(array){
        return array.every(function(name){
            return typeof name === 'string';
        });
    }
});