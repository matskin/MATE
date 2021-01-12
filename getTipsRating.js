'use strict';

/**
 * @param {number} amount
 *
 * @returns string
 */

// write code below this line

function getTipsRating(amount) {
  if (amount > 50) {
    return 'excellent';
  }

  if (amount > 20) {
    return 'great';
  }

  if (amount > 10) {
    return 'good';
  }

  if (amount > 0) {
    return 'poor';
  }

    return 'terrible';
}