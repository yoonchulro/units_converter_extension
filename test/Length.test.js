var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

const Length = require('../code/conversions/Length');

describe('Length', function() {
    it('Conversions should not be empty', function() {
        let inches = new Length('inch', [
            'meters',
            'miles',
            'kilometers',
            'centimeters',
            'millimeters',
            'yard',
            'feet',
            'furlong',
            'chain',
        ]);
        assert.notStrictEqual(inches.getAllConversions(49, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        let inches = new Length('inch', [
            'meters',
            'miles',
            'kilometers',
            'centimeters',
            'millimeters',
            'yard',
            'feet',
            'furlong',
            'chain',
        ]);
        assert.notStrictEqual(inches.getStandardConversion(60), '');
    });
});
