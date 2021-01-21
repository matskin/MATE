'use strict';

/*
 * @param {string} guestsInput
 *
 * @returns number
 */

// write code here

function getGuestsCount(guestsInput){
  if(parseFloat(guestsInput) == 0){
    return 0;
  }

  if(Boolean(parseInt(guestsInput)) != !true){
    return parseInt(guestsInput);
  } else {
    return 'not a number';
  }
}