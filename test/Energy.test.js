var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const Energy = require('../code/conversions/Energy');

describe('Energy', function() {
    var joules;
    var btus;
    var cals;
    var watthrs;

    beforeEach(function() {
        joules = new Energy('joules', ['british thermal units', 'calories', 'watt hours']);
        btus = new Energy('british thermal units', ['joules', 'calories', 'watt hours']);
        cals = new Energy('calories', ['joules', 'british thermal units', 'watt hours']);
        watthrs = new Energy('watt hours', ['joules', 'british thermal units', 'calories']);
    });

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(joules.getAllConversions(10, 2), '');
        assert.notStrictEqual(btus.getAllConversions(10, 2), '');
        assert.notStrictEqual(cals.getAllConversions(10, 2), '');
        assert.notStrictEqual(watthrs.getAllConversions(10, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(joules.getStandardConversion(10), '');
        assert.notStrictEqual(btus.getStandardConversion(10), '');
        assert.notStrictEqual(cals.getStandardConversion(10), '');
        assert.notStrictEqual(watthrs.getStandardConversion(10), '');
    });

    describe('Standard conversions', function() {
        it('Joules should return joules', function() {
            assert.strictEqual(joules.getStandardConversion(10), 10);
        });
        it('BTUs should return joules', function() {
            assert.strictEqual(btus.getStandardConversion(10), 10 * 1055.0559);
        });
        it('Calories should return joules', function() {
            assert.strictEqual(cals.getStandardConversion(30), 30 * 4.184);
        });
        it('Watt hours should return joules', function() {
            assert.strictEqual(watthrs.getStandardConversion(10), 10 / 0.0002777);
        });
    });

    describe('All conversions', function() {
        it('Joules should convert to BTUs, cals, and watt hours', function() {
            assert.strictEqual(
                joules.getAllConversions(10, 2),
                ',' +
                    joules.getPreciseNumber(10 / 1055.0559, 2) +
                    ' BTU' +
                    ',' +
                    joules.getPreciseNumber(10 / 4.184, 2) +
                    ' cal' +
                    ',' +
                    joules.getPreciseNumber(10 * 0.0002777, 2) +
                    ' Wh',
            );
        });
        it('BTUs should convert to joules, cals, and watt hours', function() {
            assert.strictEqual(
                btus.getAllConversions(10, 2),
                ',' +
                    btus.getPreciseNumber(10, 2) +
                    ' J' +
                    ',' +
                    btus.getPreciseNumber(10 / 4.184, 2) +
                    ' cal' +
                    ',' +
                    btus.getPreciseNumber(10 * 0.0002777, 2) +
                    ' Wh',
            );
        });
        it('Calories should convert to joules, BTUs, and watt hours', function() {
            assert.strictEqual(
                cals.getAllConversions(10, 2),
                ',' +
                    cals.getPreciseNumber(10, 2) +
                    ' J' +
                    ',' +
                    cals.getPreciseNumber(10 / 1055.0559, 2) +
                    ' BTU' +
                    ',' +
                    cals.getPreciseNumber(10 * 0.0002777, 2) +
                    ' Wh',
            );
        });
        it('Watt hours should convert to joules, BTUs, and calories', function() {
            assert.strictEqual(
                watthrs.getAllConversions(10, 2, false),
                ',' +
                    watthrs.getPreciseNumber(10, 2) +
                    ' J' +
                    ',' +
                    watthrs.getPreciseNumber(10 / 1055.0559, 2) +
                    ' BTU' +
                    ',' +
                    watthrs.getPreciseNumber(10 / 4.184, 2) +
                    ' cal',
            );
        });
    });
});
