/**
 *Our time class handles all temperature related conversions
 */

class Time {
    /**
     *
     * @param {Object} unit Time unit
     * @param {Array} arr Array of all conversions
     */

    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    getPrecision(number) {
        let parts = number.toString().split('.');
        if (parts.length <= 1) {
            return number < 0 ? parts[0].length - 1 : parts[0].length;
        }
        let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
        return intlen + parts[1].length;
    }

    /**
     * Return number with a max precison of 10
     * @param {number} number value to convert
     * @param {number} precision upto number precision
     * @returns precise value with precision of upto 10
     */
    getPreciseNumber(number, precision) {
        return number.toFixed(Math.min(Math.max(this.getPrecision(number), precision), 2));
    }

    /**
     * Our standard conversion is seconds, so we try to convert all selection to seconds
     * @property {Function} getStandardConversion Units converted into Seconds
     * @param {Object} quantity user query unit
     * @returns Value in Seconds
     */
    getStandardConversion(quantity) {
        switch (this.unit.toLowerCase()) {
            case 'seconds':
                return quantity;
            case 'minutes':
                return quantity * 60;
            case 'hours':
                return quantity * (60 * 60);
            case 'days':
                return quantity * (24 * 60 * 60);
            case 'weeks':
                return quantity * (7 * 24 * 60 * 60);
            default:
                return null;
        }
    }

    /**
	 * From our standard conversion we try to convert into all the other units specified in arr property of this class
	with a precision no more than 10
	 * @param {Object} quantity value to convert
	 * @param {number} precision upto this number precision
	 * @returns precise value with precsion of upto 10
	 */

    getAllConversions(quantity, precision) {
        let res = '';
        this.arr.forEach(u => {
            switch (u.toLowerCase()) {
                case 'seconds': {
                    res += ',' + this.getPreciseNumber(quantity, precision) + ' | sec';
                    break;
                }
                case 'minutes': {
                    let conv = quantity / 60;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' | mins';
                    break;
                }
                case 'hours': {
                    let conv = quantity / (60 * 60);
                    res += ',' + this.getPreciseNumber(conv, precision) + '  | hours';
                    break;
                }
                case 'days': {
                    let conv = quantity / (24 * 60 * 60);
                    res += ',' + this.getPreciseNumber(conv, precision) + '  | days';
                    break;
                }
                case 'weeks': {
                    let conv = quantity / (7 * 24 * 60 * 60);
                    res += ',' + this.getPreciseNumber(conv, precision) + '   | weeks';
                    break;
                }
            }
        });
        let result = this.dataAlignment(res).replace(/\s/g, '&nbsp;');
        return result;
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
            } else {
                str += ',' + curelt;
            }
        }
        return str;
    }
}
module.exports = Time;
