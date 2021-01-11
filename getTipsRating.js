'use strict';

/**
 * @param {number} amount
 *
 * @returns string
 */

// write code below this line

function getTipsRating(amount) {
  if (amount === 0) {
    return 'terrible';
  }

  if (amount > 0 && amount <= 10) {
    return 'poor';
  }

  if (amount > 10 && amount <= 20) {
    return 'good';
  }

  if (amount > 20 && amount <= 50) {
    return 'great';
  }

  if (amount > 50) {
    return 'excellent';
  }
}