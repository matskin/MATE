'use strict';

/*
 *
 * @param {number} amount
 * @param {number} percent
 * @param {number} period
 *
 * @returns number
 */

function calculateProfit(amount, percent, period) {
  // write code here
  let result = amount;

  for (let i = 1; i <= period; i++) {
    result = result + (result * (percent / 100));
  }

  return result - amount;
}