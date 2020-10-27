/**
 * POPULAR UNITS is a map that stores all the popular units for each unit type
    Example : The some popular units for length type are : meters, kilometers, miles
 */
const POPULAR_UNITS = {
    length: [
        'meters',
        'miles',
        'kilometers',
        'centimeters',
        'millimeters',
        'yard',
        'feet',
        'inch',
        'furlong',
        'chain',
    ],
    mass: ['grams', 'kilograms', 'pounds', 'ounces', 'tonnes', 'ton', 'milligrams', 'micrograms'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    currency: [
        'usd',
        'eur',
        'gbp',
        'inr',
        'jpy',
        'cad',
        'aud',
        'chf',
        'hkd',
        'php',
        'czk',
        'mxn',
        'brl',
    ],
    time: ['seconds', 'minutes', 'hours', 'days', 'weeks'],
    energy: ['joules', 'british thermal units', 'calories', 'watt hours'],
    datarate: ['bps', 'kbps', 'mbps', 'gbps', 'tbps'],
};

const PRE_SYMBOLS = new Set([
    '$',
    '₹',
    '€',
    '£',
    '¥',
    'Can$',
    'C$',
    'CA$',
    'A$',
    'AU$',
    'HK$',
    '₱',
    'Kč',
    'Mex$',
    'R$',
]);
