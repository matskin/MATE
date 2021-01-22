'use strict';

/*
 * @param {number} amount
 * @param {number} exchangeRate
 * @param {string} currencyName
 *
 * @returns string
 */

function convertCurrency(amount, exchangeRate, currencyName) {
  // write code here
  let x;

  if (amount > 0 && exchangeRate > 0) {
    x = amount * exchangeRate;

    return `Give them ${+x.toFixed(2)} ${currencyName}('s)`;
  } else {
    return 'Enter valid data';
  }
}