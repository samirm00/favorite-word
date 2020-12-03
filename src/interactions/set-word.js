'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to set a new value for the saved word.
 * if there is no saved word, the user is told so and the interaction ends.
 * if there is a saved word, the user is asked to confirm replacing it.
 * if the user confirms, they enter a new word that replaces the old one.
 */
const setWord = () => {
  if (saveWord === '') {
    alert(' you do not have saved word');
    return;
  }
  const confirmMessage = ' do you want to replace your word "' + saveWord + '" ?';
  let userConfirm = confirm(confirmMessage);
  if (userConfirm) {
    savedword = prompt('enter your replace word');
  }

};
