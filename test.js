const { convertCurrency } = require('./currencyConverter');

describe('Currency Converter', () => {
  test('Converts from Euro to Dollar', () => {
    expect(convertCurrency(1, 'EUR', 'USD')).toBeCloseTo(1.07);
  });

  test('Converts from Dollar to Yen', () => {
    expect(convertCurrency(1, 'USD', 'JPY')).toBeCloseTo(1.07 * 156.5);
  });

  test('Converts from Yen to Pound', () => {
    expect(convertCurrency(1, 'JPY', 'GBP')).toBeCloseTo((1 / 156.5) * 0.87);
  });
  test('Throws error for invalid currency', () => {
    expect(() => convertCurrency(1, 'EUR', 'XYZ')).toThrow('Invalid currency');
  });
});