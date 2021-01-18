'use strict';

/**
 * @param {number} guests
 *
 * @returns number
 */

function getDrinks(guests) {
  // write code here
  let result = 0;

  for (let i = 1; i <= guests; i++) {
    result = result + i;
  }

  return result;
}