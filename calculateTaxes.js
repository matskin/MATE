'use strict';

/**
 * @param {number} income
 *
 * @returns number
 * */

// write code below

function calculateTaxes(income) {
  if (income > 10000) {
    return 1000 * 0.02 + 9000 * 0.03 + (income - 10000) * 0.05;
  }

  if (income <= 10000) {
    return  1000 * 0.02 + (income - 1000) * 0.03;
  }

  if (income <= 1000) {
    return income * 0.02;
  }
}