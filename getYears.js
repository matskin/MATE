'use strict';

/*
 *
 * @param {number} amount
 * @param {number} percent
 * @param {number} expectedLimit
 *
 * @returns number
 */

function getYears(amount, percent, expectedLimit) {
  // write code here
  let result = amount;
  let i;

  for (i = 0;; i++) {
    result = result + (result * (percent / 100));

    if (expectedLimit < result) {
      break;
    }
  }

  return i;
}