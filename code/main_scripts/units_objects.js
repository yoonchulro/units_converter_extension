
/**
 *  This a comprehensive array of all units that will be recognized by the chrome extension
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
 */

const UNITS = [
    {
        /**
         *@unit string
         *  @type length
         */
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters"]
    },
    {
        /**
         * @unit string
         * @type mass
         */
        unit: "kilograms",
        type: "mass",
        aliases: ["kilograms", "kilogram", "kgs", "kg"]
    },
    {
        /**
         *@unit string
         *  @type temperature
         */
        unit: "celcius",
        type: "temperature",
        aliases: ["celcius", "c", "°c"]
    },
    {
        /**
         *@unit string
         *  @type temperature
         */
        unit: "fahrenheit",
        type: "temperature",
        aliases: ["fahrenheit", "f", "°f"]
    },
    {
        /**
         * @unit string
         * @type temperature
         */
        unit: "kelvin",
        type: "temperature",
        aliases: ["kelvin", "k", "°k"]
    },
	{
        /**
         *@unit string
         *  @type mass
         */
        unit: "grams",
        type: "mass",
        aliases: ["grams", "gram", "gms", "gm"]
    },
	{
        /**
         * @unit string
         * @type mass
         */
        unit: "pounds",
        type: "mass",
        aliases: ["pounds", "pound", "lbs", "lb"]
    },
	{
        /**
         * @unit string
         * @type mass
         */
        unit: "tonne",
        type: "mass",
        aliases: ["metric tons", "metric ton", "tonnes", "tonne"]
    },
	{
        /**
         * @unit string
         * @type mass
         */
        unit: "milligrams",
        type: "mass",
        aliases: ["milligrams", "milligram", "mgs", "mg"]
    },
	{
        /**
         *@unit string
         *  @type mass
         */
        unit: "micrograms",
        type: "mass",
        aliases: ["micrograms", "microgram"]
    },
	{
        /**
         *@unit string
         *  @type mass
         */
        unit: "ounces",
        type: "mass",
        aliases: ["ounces", "ounce", "ozs", "oz"]
    },
	{
        /**
         *@unit string
         *  @type mass
         */
        unit: "ton",
        type: "mass",
        aliases: ["tons", "ton"]
    },
    {
        /**
         *@unit string
         *  @type currency
         */
        unit: "USD",
        type: "currency",
        aliases: ["dollars", "dollar", "USD", "$"]
    },
    {
        /**
         *@unit string
         *  @type currency
         */
        unit: "EUR",
        type: "currency",
        aliases: ["euros", "euro", "EUR", "€"]
    },
    {
        /**
         * @unit string
         * @type currency
         */
        unit: "GBP",
        type: "currency",
        aliases: ["pounds", "pound", "GBP", "£"]
    },
    {
         /**
         * @unit string
         * @type currency
         */       
        unit: "INR",
        type: "currency",
        aliases: ["rupees", "rupee", "INR", "₹"]
    },
    {
        /**
         * @unit string
         * @type currency
         */
        unit: "CAD",
        type: "currency",
        aliases: ["Can$", "C$", "CA$","CAD"]
    },
    {
        /**
         * @unit string
         * @type currency
         */
        unit: "JPY",
        type: "currency",
        aliases: ["¥","yen","yuan"]
    },
    {
        /**
         *@unit string
         *  @type currency
         */
        unit: "AUD",
        type: "currency",
        aliases: ["AU$","A$","AUD"]
    },
    {
        /**
         * @unit string
         * @type currency
         */
        unit: "CHF",
        type: "currency",
        aliases: ["franc","francs","CHF"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters", "m", "mts"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "kilometers",
        type: "length",
        aliases: ["kilometer", "kilometers", "km", "kms"]
    },
    {
        /**
         *@unit string
         *  @type length
         */
        unit: "miles",
        type: "length",
        aliases: ["miles", "mile", "mi"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "centimeters",
        type: "length",
        aliases: ["centimeter", "centimeters", "cm", "cms"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "millimeters",
        type: "length",
        aliases: ["millimeter", "millimeters", "mm", "mms"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "yard",
        type: "length",
        aliases: ["yard", "yards", "yd", "yds"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "feet",
        type: "length",
        aliases: ["foot", "feet", "ft", "fts"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "inch",
        type: "length",
        aliases: ["inches", "inch", "\""]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "furlong",
        type: "length",
        aliases: ["furlong", "furlongs", "fur", "furss"]
    },
    {
        /**
         * @unit string
         * @type length
         */
        unit: "chain",
        type: "length",
        aliases: ["chain", "chains"]
    },
    {
        /**
         * @unit string
         * @type time
         */
        unit: "seconds",
        type: "time",
        aliases: ["sec", "s", "secs", "second", "seconds"]
    },
    {
        /**
         * @unit string
         * @type time
         */
        unit: "minutes",
        type: "time", 
        aliases: ["mins", "min", "minute", "minutes"]
    },
    {
        /**
         * @unit string
         * @type time
         */
        unit: "hours",
        type: "time",
        aliases: ["hrs", "h", "hour", "hours"]
    },
    {
        /**
         * @unit string
         * @type time
         */
        unit: "days",
        type: "time",
        aliases: ["day", "days"]
    },
    {
        /**
         * 
         * @unit string
         * @type time
         */
        unit: "weeks",
        type: "time",
        aliases: ["week", "wks", "weeks"]
    }
]


