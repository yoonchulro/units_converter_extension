var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

const Length = require('../code/conversions/Length');

describe('Length', function() {
    var lenInch;
    var lenM;
    var lenMi;
    var lenKm;
    var lenCm;
    var lenMm;
    var lenYard;
    var lenFeet;
    var lenFur;
    var lenChain;

    lenInch = new Length('inch', [
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

    lenM = new Length('meters', [
        'inch',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'furlong',
        'chain',
    ]);

    lenMi = new Length('miles', [
        'inch',
        'meters',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'furlong',
        'chain',
    ]);

    lenKm = new Length('kilometers', [
        'inch',
        'meters',
        'miles',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'furlong',
        'chain',
    ]);

    lenCm = new Length('centimeters', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'millimeters',
        'yard',
        'feet',
        'furlong',
        'chain',
    ]);

    lenMm = new Length('millimeters', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'yard',
        'feet',
        'furlong',
        'chain',
    ]);

    lenYard = new Length('yard', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'feet',
        'furlong',
        'chain',
    ]);

    lenFeet = new Length('feet', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'furlong',
        'chain',
    ]);

    lenFur = new Length('furlong', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'chain',
    ]);

    lenChain = new Length('chain', [
        'inch',
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'furlong',
    ]);

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(lenInch.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenM.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenMi.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenKm.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenCm.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenMm.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenYard.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenFeet.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenFur.getAllConversions(49, 2), '');
        assert.notStrictEqual(lenChain.getAllConversions(49, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(lenInch.getStandardConversion(60), '');
        assert.notStrictEqual(lenM.getStandardConversion(60), '');
        assert.notStrictEqual(lenMi.getStandardConversion(60), '');
        assert.notStrictEqual(lenKm.getStandardConversion(60), '');
        assert.notStrictEqual(lenCm.getStandardConversion(60), '');
        assert.notStrictEqual(lenMm.getStandardConversion(60), '');
        assert.notStrictEqual(lenYard.getStandardConversion(60), '');
        assert.notStrictEqual(lenFeet.getStandardConversion(60), '');
        assert.notStrictEqual(lenFur.getStandardConversion(60), '');
        assert.notStrictEqual(lenChain.getStandardConversion(60), '');
    });

    describe('Standard conversions', function() {
        // it('Non-supported should return null', function() {
        //     assert.strictEqual(massErr.getStandardConversion(10), null);
        // });
        it('Inches should return meters', function() {
            assert.strictEqual(lenInch.getStandardConversion(10), 10 / 39.3701);
        });
        it('Meters should return meters', function() {
            assert.strictEqual(lenM.getStandardConversion(10), 10);
        });
        it('Miles should return meters', function() {
            assert.strictEqual(lenMi.getStandardConversion(10), 10 * 1609.34);
        });
        it('Kilometers should return meters', function() {
            assert.strictEqual(lenKm.getStandardConversion(10), 10 * 1000);
        });
        it('Centimeters should return meters', function() {
            assert.strictEqual(lenCm.getStandardConversion(10), 10 / 100);
        });
        it('Millimeters should return meters', function() {
            assert.strictEqual(lenMm.getStandardConversion(10), 10 / 1000);
        });
        it('Yard should return meters', function() {
            assert.strictEqual(lenYard.getStandardConversion(10), 10 / 1.094);
        });
        it('Feet should return meters', function() {
            assert.strictEqual(lenFeet.getStandardConversion(10), 10 / 3.281);
        });
        it('Furlong should return meters', function() {
            assert.strictEqual(lenFur.getStandardConversion(10), 10 * 201);
        });
        it('Chain should return meters', function() {
            assert.strictEqual(lenChain.getStandardConversion(10), 10 * 20.1168);
        });
    });
});
