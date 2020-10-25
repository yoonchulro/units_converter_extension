/**
 * Our temperature class handles all temperature related conversions
 */

class Temperature {
    /**
     *
     * @param {Object} unit Temperature Unit
     * @param {Array} arr Stores the different conversion rate
     */
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    /**
     * Function to get a number's precision
     * @property {Function} getPrecision function for precision
     * @param {number} - currency value
     * @returns precise rate
     */
    getPrecision(number) {
        let parts = number.toString().split('.');
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
        return number.toFixed(Math.min(Math.max(this.getPrecision(number), precision), 2));
    }

    /**
     *Our standard conversion is celsius, so we try to convert all selection to celsius
     * @property {Function} getStandardConversion all units converted to celsius
     * @param {Object} quantity user query unit
     * @returns Value in celsius
     */
    getStandardConversion(quantity) {
        /**
         * We use a switch case to make appropriate conversion
         */
        switch (this.unit.toLowerCase()) {
            case 'celsius':
                return quantity;
            case 'kelvin':
                return quantity - 273.15;
            case 'fahrenheit':
                return ((quantity - 32) / 9) * 5;
            default:
                return null;
        }
    }

    /**
     *From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10
     * @param {Object} quantity value to convert
     * @param {number} precision upto this number precision
     * @returns precise upto 10 converted value 
     */
    getAllConversions(quantity, precision) {
        let res = '';
        this.arr.forEach(u => {
            switch (u.toLowerCase()) {
                case 'celsius':
                    res += ',' + this.getPreciseNumber(quantity, precision) + ' | °C';
                    break;
                case 'kelvin': {
                    let conv = quantity + 273.15;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | °K';
                    break;
                }
                case 'fahrenheit': {
                    let conv = (quantity / 5) * 9 + 32;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | °F';
                    break;
                }
            }
        });
        var str = res.replace(/\s/g, '&nbsp;');
        return str;
    }

    dataAlignment(res) {
        let str = '';
        var converions = res.split(',');
        converions.shift();
        var arr = [];
        converions.forEach(function(item) {
            arr.push(item.split('.')[0]);
        });
        var max_len = Math.max.apply(
            Math,
            arr.map(function(el) {
                return el.length;
            }),
        );

        for (var i in converions) {
            var curelt = converions[i];
            var cur_len = curelt.split('.')[0].length;
            if (cur_len < max_len) {
                var data = curelt.split('|');
                var fill = '';
                while (cur_len < max_len) {
                    fill += ' ';
                    cur_len = cur_len + 1;
                }
                str += ',' + data[0] + fill + '|' + data[1];
            }
        }
        return str;
    }
}

module.exports = Temperature;
