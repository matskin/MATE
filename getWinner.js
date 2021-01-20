'use strict';

/*
 * @param {string|number} maxSolved
 * @param {string|number} romanSolved
 *
 * @returns string
 */

 // write code here

function getWinner(maxSolved, romanSolved) {
  if (+maxSolved > +romanSolved) {
    return 'Max winner!!!';
  } else if (+romanSolved > +maxSolved) {
    return 'Roman winner!!!';
  } else {
    return 'Roman and Maxim are the winners!!!';
  }
}