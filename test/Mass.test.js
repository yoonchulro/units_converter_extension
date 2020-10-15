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
    return expect(
      kilos.getAllConversions(100, 1).then(function (data) {
        return { mass: data.substring(1) };
      })
    ).to.eventually.haveOwnProperty("mass");
  });
});
