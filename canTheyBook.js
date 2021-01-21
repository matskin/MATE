'use strict';

/*
 * @param {number} adultsCount
 * @param {number} childrenCount
 *
 * @returns boolean
 */

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  // write code here
  if (adultsCount > 0
  && adultsCount + childrenCount <= 8
  && childrenCount <= adultsCount * 2) {
    return true;
  } else {
    return false;
  }
}