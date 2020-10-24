/**
 * Energy class handles all energy-related conversions
 */

class Energy {
    /**
     * Creates a new Energy object
     * @param {Object} unit Energy Unit
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
        return number.toPrecision(Math.min(Math.max(this.getPrecision(number), precision), 10));
    }

    /**
     *Our standard conversion is joules, so we try to convert all selection to celsius
     * @property {Function} getStandardConversion all units converted to joules
     * @param {Object} quantity user query unit
     * @returns Value in joules
     */
    getStandardConversion(quantity) {
        /**
         * We use a switch case to make appropriate conversion
         */
        switch (this.unit.toLowerCase()) {
            case 'joules':
                return quantity;
            case 'british thermal units':
                return quantity * 1055.0559;
            case 'calories':
                return quantity * 4.184;
            case 'watt hours':
                return quantity / 0.0002777;
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
    getAllConversions(quantity, precision) {
        let res = '';
        this.arr.forEach(u => {
            switch (u.toLowerCase()) {
                case 'joules':
                    res += ',' + this.getPreciseNumber(quantity, precision) + ' J';
                    break;
                case 'british thermal units': {
                    let conv = quantity / 1055.0559;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' BTU';
                    break;
                }
                case 'calories': {
                    let conv = quantity / 4.184;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' cal';
                    break;
                }
                case 'watt hours': {
                    let conv = quantity * 0.0002777;
                    res += ',' + this.getPreciseNumber(conv, precision) + ' Wh';
                    break;
                }
            }
        });

        return res;
    }
}

module.exports = Energy;
