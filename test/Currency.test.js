var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const Currency = require('../code/conversions/Currency');

describe('Currency', function() {
    let usd = new Currency('USD', ['eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf']);
    it('Conversions should not be empty', function() {
        assert.notStrictEqual(usd.getAllConversions(49.99, 1), '');
    });

    it('Standard Conversions should not be empty', function() {
        assert.notStrictEqual(usd.getStandardConversion(50), '');
    });

    it('USD Conversion check', function() {
        return expect(
            usd.getAllConversions(50, 1).then(function(data) {
                return { currency: data.substring(1) };
            }),
        ).to.eventually.haveOwnProperty('currency');
    });
});
