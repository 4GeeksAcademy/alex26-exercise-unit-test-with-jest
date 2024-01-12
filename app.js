// currencyConverter.js

let exchangeRates = {
  EUR: 1,
  USD: 1.07,
  JPY: 156.5,
  GBP: 0.87,
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
    throw new Error('Invalid currency');
  }
  const euroAmount = amount / exchangeRates[fromCurrency];
  const convertedAmount = euroAmount * exchangeRates[toCurrency];

  return convertedAmount;
}

module.exports = { convertCurrency };

 
