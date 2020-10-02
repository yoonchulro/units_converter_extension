const { TestScheduler } = require('jest');
const cur = require('../code/conversions/Currency.js');

test('Convert USD', () => {
    testCur = new cur.Currency("USD", ["eur", "gbp", "inr", "jpy", "cad","aud","chf"]);
    result = ""
    expect(testCur.getAllConversions(49.99)).toBe(result);
  });