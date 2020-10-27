var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

const Datarate = require('../code/conversions/Datarate');

describe('Datarate', function() {
    var rateBps;
    var rateKbps;
    var rateMbps;
    var rateGbps;
    var rateTbps;

    rateBps = new Datarate('bps', ['kbps', 'mbps', 'gbps', 'tbps']);
    rateKbps = new Datarate('kbps', ['bps', 'mbps', 'gbps', 'tbps']);
    rateMbps = new Datarate('mbps', ['bps', 'kbps', 'gbps', 'tbps']);
    rateGbps = new Datarate('gbps', ['bps', 'kbps', 'mbps', 'tbps']);
    rateTbps = new Datarate('tbps', ['bps', 'kbps', 'mbps', 'gbps']);

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(rateBps.getAllConversions(1000, 2), '');
        assert.notStrictEqual(rateKbps.getAllConversions(1000, 2), '');
        assert.notStrictEqual(rateMbps.getAllConversions(1000, 2), '');
        assert.notStrictEqual(rateGbps.getAllConversions(1000, 2), '');
        assert.notStrictEqual(rateTbps.getAllConversions(1000, 2), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(rateBps.getStandardConversion(1000), '');
        assert.notStrictEqual(rateKbps.getStandardConversion(1000), '');
        assert.notStrictEqual(rateMbps.getStandardConversion(1000), '');
        assert.notStrictEqual(rateGbps.getStandardConversion(1000), '');
        assert.notStrictEqual(rateTbps.getStandardConversion(1000), '');
    });

    describe('Standard conversions', function() {
        it('bps should return bps', function() {
            assert.strictEqual(rateBps.getStandardConversion(1000), 1000);
        });
        it('kbps should return bps', function() {
            assert.strictEqual(rateKbps.getStandardConversion(1000), 1000 * 1000);
        });
        it('mbps should return bps', function() {
            assert.strictEqual(rateMbps.getStandardConversion(1000), 1000 * 1000000);
        });
        it('gbps should return bps', function() {
            assert.strictEqual(rateGbps.getStandardConversion(1000), 1000 * 1000000000);
        });
        it('tbps should return bps', function() {
            assert.strictEqual(rateTbps.getStandardConversion(1000), 1000 * 1000000000000);
        });
    });
});
