'use strict';

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns number
 */

// write code below this line

const getLargestExpressionResult = (a, b) => {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;

   if (addition > (subtraction && multiplication && division)){
     return addition;
  }

   if (subtraction > (addition && multiplication && division)){
     return subtraction;
  }

  if (multiplication > (addition && subtraction && division)){
     return multiplication;
  }

  if (division > (addition && subtraction && multiplication)){
     return division;
  }
};

// Решение проходит не все тесты, т.е. не правильное