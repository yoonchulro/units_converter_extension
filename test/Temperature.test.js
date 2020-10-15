var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const Temperature = require("../code/conversions/Temperature");

before(function() {
    let tempF = new Temperature("fahrenheit", ["celsius", "kelvin"]);
    let tempC = new Temperature("celsius", ["fahrenheit", "kelvin"]);
    let tempK = new Temperature("kelvin", ["fahrenheit", "celsius"]);
});

describe("Temperature", function() {
    it("Conversions should not be empty", function() {
        assert.notStrictEqual(tempF.getAllConversions(90, 2), "");
        assert.notStrictEqual(tempC.getAllConversions(90, 2), "");
        assert.notStrictEqual(tempK.getAllConversions(90, 2), "");
    });

    it("Standard Conversions should not be empty", function() {
        assert.notStrictEqual(tempF.getStandardConversion(90), "");
        assert.notStrictEqual(tempC.getStandardConversion(90), "");
        assert.notStrictEqual(tempK.getStandardConversion(90), "");
    });

    describe("Standard conversions", function() {
        it("Fahrenheit should convert to celsius", function() {
            assert.strictEqual(tempF.getStandardConversion(90), (90 - 32) / 9 * 5);
        });
    
        it("Celsius should return celsius", function() {
            assert.strictEqual(tempC.getStandardConversion(25), 25);
        });
    
        it("Kelvin should convert to celsius", function() {
            assert.strictEqual(tempK.getStandardConversion(300), 300 - 273.15);
        });
    });
 
    describe("All conversions", function() {
        it("Fahrenheit should convert to celsius and kelvin", function() {
            assert.strictEqual(tempF.getAllConversions(90, 2), "," + getPreciseNumber(((90 - 32) * 5 / 9), 2) + " °C" + "," + getPreciseNumber(((90 - 32) * 5 / 9), 2) + " °K");
        });

        it("Celsius should convert to fahrenheit and kelvin", function() {
            assert.strictEqual(tempC.getAllConversions(25, 2), "," + getPreciseNumber(((25 / 5 * 9) + 32), 2) + " °F" + ",", + getPreciseNumber(25 + 273.15) + " °K");
        });

        it("Kelvin should convert to fahrenheit and celsius", function() {
            assert.strictEqual(tempK.getAllConversions(300, 2), "," + getPreciseNumber(((300 - 273.15) / 5 * 9 + 32), 2) + " °F" + "," + getPreciseNumber((300 - 273.15), 2) + " °C");
        });
    });
});
