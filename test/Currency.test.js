var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
var should = chai.should()

const Currency = require('../code/conversions/Currency')

describe('Currency', function() {
    it('Conversions should not be empty', function() {
        let usd = new Currency("USD", ["eur", "gbp", "inr", "jpy", "cad","aud","chf"]);
        assert.notStrictEqual(usd.getAllConversions(49.99), "");
    })
})
