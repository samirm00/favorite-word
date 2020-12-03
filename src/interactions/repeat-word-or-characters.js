'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see either the whole word repeated, or their word with each character repeated.
 * if there is no word, the user is told so
 */
const repeatWordOrCharacters = () => {
  let newString = '';
  let choice = '';
  let repeat = 1;

  // 1. if there is no saved word, call displayWord and exit early
  if (favoriteWord === '') {
    displayWord();
    return;
  }

  // 2. use chooseBetween to let the user select 'word' or 'characters'
  choice = chooseFromOptions(['word', 'characters']);
  // 3. use enterNumber to ask the user how many times to repeat
  repeat = enterNumber('enter a repetation  number')
  // 4. use repeatString or repeatCharacters to create a new string, depending on user the user's choice
  if (choice === 'word') {
    newString = repeatString(favoriteWord, repeat);
  }
  if (choice === 'characters') {
    newString = repeatCharacters(favoriteWord, repeat);
  }
  // 5. render a final before/after message with favoriteWord and the new string from ^ up there
  const finalMessage = beforeAndAfter(favoriteWord, newString, 'repeat word or characters')
  // 6. alert the rendered message
  alert(finalMessage);


};
