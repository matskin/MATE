'use strict';

/*
* @param {number} adultsCount
* @param {number} childrenCount
* @param {number} babiesCount
 *
 * @returns string
 */

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  // write code here
  if (adultsCount + childrenCount <= 3 && babiesCount <= 1) {
    return 'small room';
  }

  if ((adultsCount + childrenCount <= 4 && babiesCount <= 1)
    || (adultsCount + childrenCount <= 3 && babiesCount <= 2)) {
      return 'small room + extra bed';
    }

  if (adultsCount + childrenCount > 4 && babiesCount <= 1) {
    return 'big room';
  }

  if ((adultsCount + childrenCount <= 7 && babiesCount <= 2)) {
    return 'big room + extra bed';
  }
}