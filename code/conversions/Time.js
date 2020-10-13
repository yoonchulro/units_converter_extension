/**
 *Our time class handles all temperature related conversions
 */

class Time {
	/**
	 * 
	 * @param {Object} unit Time unit
	 * @param {Array} arr Array of all conversions
	 */

	constructor(unit, arr){
		this.unit = unit;
		this.arr = arr;
	}

	/**
	 * Our standard conversion is seconds, so we try to convert all selection to seconds
	 * @property {Function} getStandardConversion Units converted into Seconds
	 * @param {Object} quantity user query unit
	 * @returns Value in Seconds
	 */
	getStandardConversion(quantity) {
		
		switch(this.unit.toLowerCase()){
			case "seconds": return quantity;
			case "minutes": return quantity * 60;
			case "hours": return quantity * (60 * 60);
			case "days": return quantity * (24 * 60 * 60);
			case "weeks": return quantity * (7 * 24 * 60 * 60);
			default: return null;
		}
	}
	
	/**
	 * From our standard conversion we try to convert into all the other units specified in arr property of this class
	with a precision no more than 10
	 * @param {Object} quantity value to convert
	 * @param {number} precision upto this number precision
	 * @returns precise value with precsion of upto 10
	 */

	getAllConversions(quantity, precision){
		let res = "";
		this.arr.forEach((u) => {
			switch(u.toLowerCase()){
				case "seconds": {
					res += "," + getPreciseNumber(quantity, precision) + " sec";
					break;
				}
				case "minutes": {
					let conv = quantity / 60;
					res += ',' + getPreciseNumber(conv, precision) + " mins";
					break;
				}
				case "hours": {
					let conv = quantity / (60 * 60);
					res += ',' + getPreciseNumber(conv, precision) + " hours";
					break;
				}
				case "days": {
					let conv = quantity / (24 * 60 * 60);
					res += ',' + getPreciseNumber(conv, precision) + " days";	
					break;
				}
				case "weeks": {
					let conv = quantity / (7 * 24 * 60 * 60);
					res += ',' + getPreciseNumber(conv, precision) + " days";	
					break;
				}
			}

		});
		return res;
	}
}
module.exports = Time;