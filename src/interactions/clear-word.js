'use strict';

console.log('--- loading interaction -->');

/**
 * if there is a favorite word, the user is asked to confirm before clearing it.
 * if there is no saved word the user is told there is no word to clear
 */
const clearWord = () => {

  if (favoriteWord === '') {
    alert('there is no word to clear! ');
  }

  const confirmMessage = 'your favorite word is "' + favoriteWord + '" are you sure you want to clean it ?';
  const userConfirm = confirm(confirmMessage);
  if (userConfirm) {
    favoriteWord = '';
  } 

};
