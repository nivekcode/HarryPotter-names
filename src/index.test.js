/**
 * Created by kevinkreuzer on 24.01.17.
 */
'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;
var sut = require('../src/index');
var allNames = require('../src/harryPotter.names.json');

describe('Harry Potter names', function () {

    it('should work', function(){
        expect(true).to.be.true;
    });

    it('should have a list of all available names', function () {
        expect(isArrayOfStrings(sut.all)).to.be.true;
        assert.equal(sut.all, allNames);
    });

    it('should allow me to get a random name from the list', function () {
        var random = sut.random();
        expect(allNames).to.include(random);
    });

    function isArrayOfStrings(array){
        return array.every(function(name){
            return typeof name === 'string';
        });
    }
});