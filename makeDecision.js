'use strict';

/*
 *
 * @param {number} fuelRemaining
 * @param {number} distance
 * @param {number} fuelConsumption
 *
 * @returns string
 */

function makeDecision(fuelRemaining, distance, fuelConsumption) {
  // write code here
  if (fuelConsumption > 0 && fuelRemaining > 0 && distance > 0 && fuelRemaining
  >= (fuelConsumption / 100 * distance)) {
    return 'reach gas station by themselves';
  } else if (fuelConsumption > 0 && fuelRemaining >= 0 && distance > 0
  && fuelRemaining < (fuelConsumption / 100 * distance)) {
    return 'ask for help';
  } else {
    return 'please, enter the valid data.';
  }
}
