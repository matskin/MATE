'use strict';

/*
 * @param {number} side
 * @param {number} diagonal
 *
 * @returns number
 */

function getRectangleArea(side, diagonal) {
  // write code here
  if (diagonal > side && side > 0) {
    return +(side * Math.sqrt(diagonal * diagonal - side * side)).toFixed(2);
  } else {
    return 'not a rectangle.';
  }
}