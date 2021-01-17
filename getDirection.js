'use strict';

/**
 * @param direction
 *
 * @returns {string}
 */

// write code here

function getDirection(direction) {
  switch (direction) {
    case 'back':
      return 'hor=0 ver=-1';

    case 'forward':
      return 'hor=0 ver=1';

    case 'left':
      return 'hor=-1 ver=0';

    case 'right':
      return 'hor=1 ver=0';

    case 'stop':
      return 'hor=0 ver=0';

    default:
      return 'hor=0 ver=0';
  }
}
