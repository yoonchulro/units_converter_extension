/**
 * Datarates class handles all data rate-related conversions
 */

class Datarate {
    /**
     * Creates a new Datarate object
     * @param {Object} unit Datarate Unit
     * @param {Array} arr Stores the different conversion rates
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
     * @param {number} number energy value
     * @param {number} precision precision value
     * @returns precise value of upto 10
     */
    getPreciseNumber(number, precision) {
        // return number.toPrecision(Math.min(Math.max(this.getPrecision(number), precision), 5));
        return number.toFixed(Math.min(Math.max(this.getPrecision(number), precision), 4));
    }

    /**
     *Our standard conversion is bits per second (bps), so we try to convert all selection to bps
     * @property {Function} getStandardConversion all units converted to bps
     * @param {Object} quantity user query unit
     * @returns Value in bps
     */
    getStandardConversion(quantity) {
        /**
         * We use a switch case to make appropriate conversion
         */
        switch (this.unit.toLowerCase()) {
            case 'bbps':
                return quantity;
            case 'kbps':
                return quantity * 1000;
            case 'mbps':
                return quantity * 1000000;
            case 'gbps':
                return quantity * 1000000000;
            case 'tbps':
                return quantity * 1000000000000;
            default:
                return null;
        }
    }

    /**
     * From our standard conversion we try to convert into all the other units specified in arr property of this class with a precision no more than 10
     * @param {Object} quantity value to convert
     * @param {Number} precision up to this number precision
     * @returns precise up to 10 converted value
     */
    getAllConversions(quantity, precision, alignment) {
        let res = '';
        let max_len = quantity.toString().split('.')[0].length;
        this.arr.forEach(u => {
            switch (u.toLowerCase()) {
                case 'bps':
                    res += ',' + this.getPreciseNumber(quantity, precision) + ' | bps';
                    break;
                case 'kbps': {
                    let conv = quantity / 1000;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | kbps';
                    break;
                }
                case 'mbps': {
                    let conv = quantity / 1000000;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | mbps';
                    break;
                }
                case 'gbps': {
                    let conv = quantity / 1000000000;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | gbps';
                    break;
                }
                case 'tbps': {
                    let conv = quantity / 1000000000000;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | tbps';
                    break;
                }
            }
        });
        if (alignment) {
            let result = this.dataAlignment(res).replace(/\s/g, '&nbsp;');
            return result;
        } else return res;
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

module.exports = Datarates;
