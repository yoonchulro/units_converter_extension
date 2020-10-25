var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

const Time = require('../code/conversions/Time');

describe('Time', function() {
    var timeSec;
    var timeMin;
    var timeHr;
    var timeDay;
    var timeWeek;
    timeSec = new Time('seconds', ['minutes', 'hours', 'days', 'weeks']);
    timeMin = new Time('minutes', ['seconds', 'hours', 'days', 'weeks']);
    timeHr = new Time('hours', ['seconds', 'minutes', 'days', 'weeks']);
    timeDay = new Time('days', ['seconds', 'minutes', 'hours', 'weeks']);
    timeWeek = new Time('weeks', ['seconds', 'minutes', 'hours', 'days']);
    timeNull = new Time('eons', ['lots']);

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(timeSec.getAllConversions(100, 2), '');
        assert.notStrictEqual(timeMin.getAllConversions(100, 2), '');
        assert.notStrictEqual(timeHr.getAllConversions(100, 2), '');
        assert.notStrictEqual(timeDay.getAllConversions(100, 2), '');
        assert.notStrictEqual(timeWeek.getAllConversions(100, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(timeSec.getStandardConversion(100), '');
        assert.notStrictEqual(timeMin.getStandardConversion(100), '');
        assert.notStrictEqual(timeHr.getStandardConversion(100), '');
        assert.notStrictEqual(timeDay.getStandardConversion(100), '');
        assert.notStrictEqual(timeWeek.getStandardConversion(100), '');
    });

    describe('Standard conversions', function() {
        // it('Non-supported should return null', function() {
        //     assert.strictEqual(timeNull.getStandardConversion(10), null);
        // });
        it('Seconds should return seconds', function() {
            assert.strictEqual(timeSec.getStandardConversion(10), 10);
        });
        it('Minutes should return seconds', function() {
            assert.strictEqual(timeMin.getStandardConversion(10), 10 * 60);
        });
        it('Hours should return seconds', function() {
            assert.strictEqual(timeHr.getStandardConversion(10), 10 * 60 * 60);
        });
        it('Days should return seconds', function() {
            assert.strictEqual(timeDay.getStandardConversion(10), 10 * 60 * 60 * 24);
        });
        it('Weeks should return seconds', function() {
            assert.strictEqual(timeWeek.getStandardConversion(10), 10 * 60 * 60 * 24 * 7);
        });
    });

    describe('Alignment', function() {
        it('algnment should return the proper string', function() {
            let res = ',10.00 | sec,0.0095 | mins,2.3901  | hours,10  | days,10   | weeks';
            assert.strictEqual(
                timeSec.dataAlignment(res),
                ',10.00           | sec,0.0095            | mins,2.3901             | hours,10    | days',
            );
        });
    });
});
