'use strict';

/*
* @param {number} adultsCount
* @param {number} childrenCount
* @param {number} babiesCount
*
* @returns boolean
*/

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  // write code here
  if (adultsCount > 0
  && adultsCount + childrenCount <= 8
  && childrenCount + babiesCount <= adultsCount * 2
  && babiesCount <= 3) {
    return true;
  } else {
    return false;
  }
}
