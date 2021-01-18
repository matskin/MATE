'use strict';

/*
 * @param {number} guests
 * @param {number} step
 *
 * @returns number
 */

function getDrinksWithStep(guests, step) {
  // write code here
  let result = 0;

  for (let i = 1; i <= guests; i = i + step) {
    result = result + i;
  }

  return result;
}