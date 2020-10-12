/**
 * Currency class handles all currency related conversions
 */
class Currency {
  /**
   * 
   * @param {Object} unit Currency Unit
   * @param {Array} arr Stores the different conversion rates
   */
  constructor(unit, arr) {
    this.unit = unit;
    this.arr = arr;
  }

  
  /**
   * api call that fetches the conversion rate for a given query q, where q is the stock name. For eg: USD
   * @property {Function} getData fetches live rates from the API
   * @param {Object} q Any user query for eg(U.S.D)
   * @returns fetched data from the API
   */
  
  getData(q) {
    if (typeof fetch !== "function") {
      let fetch = require("node-fetch");
      return fetch("https://api.exchangeratesapi.io/latest?base=" + q)
        .then((response) => response.json())
        .then((data) => data.rates);
    } else {
      return fetch("https://api.exchangeratesapi.io/latest?base=" + q)
        .then((response) => response.json())
        .then((data) => data.rates);
    }
  }

  /**
   * Function to get a number's precision
   * @property {Function} getPrecision function for precision
   * @param {number} - currency value
   * @returns precise rate
   */

  getPrecision(number) {
    let parts = number.toString().split(".");
    if (parts.length <= 1) {
      return number < 0 ? parts[0].length - 1 : parts[0].length;
    }
    let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
    return intlen + parts[1].length;
  }

/**
 * Function to get a maximum precision of 10
 * @param {number} number currency value
 * @param {number} precision precision value
 * @returns precise value of upto 10
 */
  
  getPreciseNumber(number, precision) {
    return number.toPrecision(
      Math.min(Math.max(this.getPrecision(number), precision), 10)
    );
  }

  
  /**
   * Our standard conversion is USD, so we try to convert all selection to USD
   * @param {Object} quantity 
   * @returns value in standard conversion rate - USD
   */


  async getStandardConversion(quantity) {
    let rate;
    switch (this.unit.toLowerCase()) {
      case "usd":
        return quantity;
      case "eur":
        rate = await this.getData("EUR").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "gbp":
        rate = await this.getData("GBP").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "inr":
        rate = await this.getData("INR").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "jpy":
        rate = await this.getData("JPY").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "cad":
        rate = await this.getData("CAD").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "aud":
        rate = await this.getData("AUD").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "chf":
        rate = await this.getData("CHF").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      default:
        return null;
    }
  }

  
  
  /**
   * From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10
   * @param {Object} quantity  Selections converted to USD
   * @param {number} precision Calls our previour function to get precise value
   * @returns an array with precision
   */

  async getAllConversions(quantity, precision) {
    let res = "";
    let factor = 1;
    for (let i = 0; i < this.arr.length; i++) {
      switch (this.arr[i].toLowerCase()) {
        case "usd":
          res += ",$ " + this.getPreciseNumber(quantity, precision);
          break;
        case "eur":
          factor = await this.getData("USD").then(function (d) {
            return d["EUR"];
          });
          res += ",€ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "gbp":
          factor = await this.getData("USD").then(function (d) {
            return d["GBP"];
          });
          res += ",£ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "inr":
          factor = await this.getData("USD").then(function (d) {
            return d["INR"];
          });
          res += ",₹ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "jpy":
          factor = await this.getData("USD").then(function (d) {
            return d["JPY"];
          });
          res += ",¥ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "cad":
          factor = await this.getData("USD").then(function (d) {
            return d["CAD"];
          });
          res += ",C$ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "aud":
          factor = await this.getData("USD").then(function (d) {
            return d["AUD"];
          });
          res += ",AU$ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "chf":
          factor = await this.getData("USD").then(function (d) {
            return d["CHF"];
          });
          res += ",Fr " + this.getPreciseNumber(factor * quantity, precision);
          break;
      }
    }
    return res;
  }
}

module.exports = Currency;
