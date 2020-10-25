var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const Currency = require('../code/conversions/Currency');

describe('Currency', function() {
    var curUsd;
    var curEur;
    var curGbp;
    var curInr;
    var curJpy;
    var curCad;
    var curAud;
    var curChf;
    var curHkd;
    var curPhp;
    var curCzk;
    var curMxn;
    var curBrl;
    curUsd = new Currency('usd', ['eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curEur = new Currency('eur', ['usd', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curGbp = new Currency('gbp', ['usd', 'eur', 'inr', 'jpy', 'cad', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curInr = new Currency('inr', ['usd', 'eur', 'gbp', 'jpy', 'cad', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curJpy = new Currency('jpy', ['usd', 'eur', 'gbp', 'inr', 'cad', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curCad = new Currency('cad', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'aud', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curAud = new Currency('aud', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'chf', 'hkd','php', 'czk', 'mxn', 'brl']);
    curChf = new Currency('chf', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'hkd','php', 'czk', 'mxn', 'brl']);
    curHkd = new Currency('hkd', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf','php', 'czk', 'mxn', 'brl']);
    curPhp = new Currency('php', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf','hkd', 'czk', 'mxn', 'brl']);
    curCzk = new Currency('czk', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf','hkd','php', 'mxn', 'brl']);
    curMxn = new Currency('mxn', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf','hkd','php', 'czk', 'brl']);
    curBrl = new Currency('brl', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf','hkd','php', 'czk', 'mxn']);

    it('Conversions should not be empty', function() {
        assert.notStrictEqual(curUsd.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curEur.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curGbp.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curInr.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curJpy.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curCad.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curAud.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curChf.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curHkd.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curPhp.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curCzk.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curMxn.getAllConversions(49.99, 1), '');
        assert.notStrictEqual(curBrl.getAllConversions(49.99, 1), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(curUsd.getStandardConversion(50), '');
        assert.notStrictEqual(curEur.getStandardConversion(50), '');
        assert.notStrictEqual(curGbp.getStandardConversion(50), '');
        assert.notStrictEqual(curInr.getStandardConversion(50), '');
        assert.notStrictEqual(curJpy.getStandardConversion(50), '');
        assert.notStrictEqual(curCad.getStandardConversion(50), '');
        assert.notStrictEqual(curAud.getStandardConversion(50), '');
        assert.notStrictEqual(curChf.getStandardConversion(50), '');
        assert.notStrictEqual(curHkd.getStandardConversion(50), '');
        assert.notStrictEqual(curPhp.getStandardConversion(50), '');
        assert.notStrictEqual(curCzk.getStandardConversion(50), '');
        assert.notStrictEqual(curMxn.getStandardConversion(50), '');
        assert.notStrictEqual(curBrl.getStandardConversion(50), '');
    });

    it('USD Conversion check', function() {
        return expect(
            curUsd.getAllConversions(50, 1).then(function(data) {
                return { currency: data.substring(1) };
            }),
        ).to.eventually.haveOwnProperty('currency');
    });
});
