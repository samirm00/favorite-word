'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to set a new value for the saved word.
 * if there's already a saved word, they are asked to confirm replacing it
 */
const reverseWord = () => {
  // 1. if there is no saved word, call displayWord and exit early
  if (savedWord === '') {
    displayWord();
    return;
  }
  // 2. use reverseString to reverse the favorite word
  const reverseSavedWord = reverseString(savedWord);
  // 3. render a final before/after message with favoriteWord and the new string from ^ up there
  const finalMessage = beforeAndAfter(savedWord, reverseSavedWord, 'reverse saved word');
  // 4. alert the rendered message
  alert(finalMessage);
};
