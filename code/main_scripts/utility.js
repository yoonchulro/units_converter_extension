/**
 *  The following file has all the utility functions that perform trivial yet important tasks
 */

/**
 * @property {Function} descending_length This is a sort function used to sort an array of string in descending order of string lengths
 * @param {Array} a array of strings
 * @param {Array} b array of strings
 * @returns sorted array in descending order of string lengths
 */
function descending_length(a, b) {
    return b.length - a.length;
}

/**
 * @property {Function} matches_filter This is a filtering function used by  get_possible_conversions_list to filter out the current unit itself
 * @param {String} currentUnit
 * @returns filtered current unit
 */
function matches_filter(currentUnit) {
    return function(element) {
        return element.toLowerCase() != currentUnit.toLowerCase();
    };
}

/**
 * @property {Function} get_possible_conversions_list Function to return all popular units
 * @param {String} type
 * @param {String} currentUnit
 * @returns For a given unit, this function returns all the popular units that it can be converted into except itself
 */
function get_possible_conversions_list(type, currentUnit) {
    return POPULAR_UNITS[type].filter(matches_filter(currentUnit));
}

/**
 * @property {Function} get_conversion_class Conversion  lass from the unit type
 * @param {String} type
 * @param {String} unit
 * @returns Return appropriate conversion class from the conversion scripts based on unit type
 */
function get_conversion_class(type, unit) {
    if (type == 'temperature') {
        return new Temperature(unit, get_possible_conversions_list(type, unit));
    } else if (type == 'currency') {
        return new Currency(unit, get_possible_conversions_list(type, unit));
    } else if (type == 'length') {
        return new Length(unit, get_possible_conversions_list(type, unit));
    } else if (type == 'time') {
        return new Time(unit, get_possible_conversions_list(type, unit));
    } else if (type == 'mass') {
        return new Mass(unit, get_possible_conversions_list(type, unit));
    } else if (type == 'energy') {
        return new Energy(unit, get_possible_conversions_list(type, unit));
    }
}

/**
 * Get a number's precision
 * @property {Function} getPrecision function for a number's precision
 * @param {number} number
 * @returns number's precison
 */
function getPrecision(number) {
    let parts = number.toString().split('.');
    if (parts.length <= 1) {
        return number < 0 ? parts[0].length - 1 : parts[0].length;
    }
    let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
    return intlen + parts[1].length;
}

//
/**
 * @property {Function} getPreciseNumber function for precise number
 * @param {number} number
 * @param {number} precision
 * @returns Return number with a max precison of 10
 */
function getPreciseNumber(number, precision) {
    return number.toPrecision(Math.min(Math.max(getPrecision(number), precision), 10));
}
