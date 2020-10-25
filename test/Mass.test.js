var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

const Mass = require('../code/conversions/Mass');

describe('Mass', function() {
    var massKg;
    var massG;
    var massPounds;
    var massOunces;
    var massTonnes;
    var massTon;
    var massMg;
    var massUg;
    // mass: ['grams', 'kilograms', 'pounds', 'ounces', 'tonnes', 'ton', 'milligrams', 'micrograms']
    massKg = new Mass('kilograms', [
        'grams',
        'pounds',
        'ounces',
        'tonnes',
        'ton',
        'milligrams',
        'micrograms',
    ]);

    massG = new Mass('grams', [
        'kilograms',
        'pounds',
        'ounces',
        'tonnes',
        'ton',
        'milligrams',
        'micrograms',
    ]);

    massPounds = new Mass('pounds', [
        'grams',
        'kilograms',
        'ounces',
        'tonnes',
        'ton',
        'milligrams',
        'micrograms',
    ]);

    massOunces = new Mass('ounces', [
        'grams',
        'kilograms',
        'pounds',
        'tonnes',
        'ton',
        'milligrams',
        'micrograms',
    ]);

    massTonnes = new Mass('tonnes', [
        'grams',
        'kilograms',
        'pounds',
        'ounces',
        'ton',
        'milligrams',
        'micrograms',
    ]);

    massTon = new Mass('ton', [
        'grams',
        'kilograms',
        'pounds',
        'ounces',
        'tonnes',
        'milligrams',
        'micrograms',
    ]);

    massMg = new Mass('milligrams', [
        'grams',
        'kilograms',
        'pounds',
        'ounces',
        'tonnes',
        'ton',
        'micrograms',
    ]);

    massUg = new Mass('micrograms', [
        'grams',
        'kilograms',
        'pounds',
        'ounces',
        'tonnes',
        'ton',
        'milligrams',
    ]);

    massErr = new Mass('errorgrams', ['none']);

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(massKg.getAllConversions(100, 2), '');
        assert.notStrictEqual(massG.getAllConversions(100, 2), '');
        assert.notStrictEqual(massPounds.getAllConversions(100, 2), '');
        assert.notStrictEqual(massOunces.getAllConversions(100, 2), '');
        assert.notStrictEqual(massTonnes.getAllConversions(100, 2), '');
        assert.notStrictEqual(massTon.getAllConversions(100, 2), '');
        assert.notStrictEqual(massMg.getAllConversions(100, 2), '');
        assert.notStrictEqual(massUg.getAllConversions(100, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(massKg.getStandardConversion(100), '');
        assert.notStrictEqual(massG.getStandardConversion(100), '');
        assert.notStrictEqual(massPounds.getStandardConversion(100), '');
        assert.notStrictEqual(massOunces.getStandardConversion(100), '');
        assert.notStrictEqual(massTonnes.getStandardConversion(100), '');
        assert.notStrictEqual(massTon.getStandardConversion(100), '');
        assert.notStrictEqual(massMg.getStandardConversion(100), '');
        assert.notStrictEqual(massUg.getStandardConversion(100), '');
    });

    describe('Standard conversions', function() {
        // it('Non-supported should return null', function() {
        //     assert.strictEqual(massErr.getStandardConversion(10), null);
        // });
        it('Kilograms should return kilograms', function() {
            assert.strictEqual(massKg.getStandardConversion(10), 10);
        });
        it('Grams should return kilograms', function() {
            assert.strictEqual(massG.getStandardConversion(10), 10 / 1000);
        });
        it('Pounds should return kilograms', function() {
            assert.strictEqual(massPounds.getStandardConversion(10), 10 / 2.20462262);
        });
        it('Ounces should return kilograms', function() {
            assert.strictEqual(massOunces.getStandardConversion(10), 10 / 35.273962);
        });
        it('Tonnes should return kilograms', function() {
            assert.strictEqual(massTonnes.getStandardConversion(10), 10 * 1000);
        });
        it('Ton should return kilograms', function() {
            assert.strictEqual(massTon.getStandardConversion(10), 10 * 907.18474);
        });
        it('Milligrams should return kilograms', function() {
            assert.strictEqual(massMg.getStandardConversion(10), 10 / 1000000);
        });
        it('Micrograms should return kilograms', function() {
            assert.strictEqual(massUg.getStandardConversion(10), 10 / 1000000000);
        });
    });

    it('Kilogram conversion check', function() {
        var mass_data = massKg.getAllConversions(100, 1).substring(1);
        return expect({ mass: mass_data }).to.haveOwnProperty('mass');
    });
});
