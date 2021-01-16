'use strict';

/*
 * @param {number} number
 *
 * @return {string}
 */

 // write code here

function getPaymentSystem(value) {
  switch (value) {
    case 34:
    case 37:
      return 'American Express';

    case 4:
      return 'VISA';

    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return 'MasterCard';

    case 63:
    case 67:
      return 'Maestro';

    default:
      return 'unknown payment system';
  }
}
