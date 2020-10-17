var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

const Time = require('../code/conversions/Time');

describe('Time', function() {
    let secs = new Time('seconds', ['minutes', 'hours', 'days', 'weeks']);
    it('Conversions should not be empty', function() {
        assert.notStrictEqual(secs.getAllConversions(100, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(secs.getStandardConversion(100), '');
    });
});
