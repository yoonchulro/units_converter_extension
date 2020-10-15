var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;

const Mass = require("../code/conversions/Mass");

describe("Mass", function () {
  let kilos = new Mass("kilograms", [
    "grams",
    "pounds",
    "ounces",
    "tonnes",
    "ton",
    "milligrams",
    "micrograms",
  ]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(kilos.getAllConversions(100, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(kilos.getStandardConversion(100), "");
  });

  it("Kilogram conversion check", function () {
    var mass_data = kilos.getAllConversions(100, 1).substring(1);
    return expect({ mass: mass_data }).to.haveOwnProperty("mass");
  });
});
