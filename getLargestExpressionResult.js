'use strict';

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns number
 */

// write code below this line

const getLargestExpressionResult = (a, b) => {
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;

  if (add >= sub && add >= mul && add >= div){
    return add;
  }

  if (sub >= add && sub >= mul && sub >= div){
     return sub;
  }

  if (mul >= add && mul >= sub && mul >= div){
     return mul;
  }

  return div;
};