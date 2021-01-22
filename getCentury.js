'use strict';

/*
 * @param {number} year
 *
 * @return number
 *
 */

function getCentury(year) {
  // write code here
  let result = 0;

  if (year === 0) {
    result = year + 1;
  }

  return Math.ceil((year + result) / 100);
}
