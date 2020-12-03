'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see either the whole word repeated, or their word with each character repeated.
 * if there is no word, the user is told so
 */
const repeatWordOrCharacters = () => {
  // 1. if there is no saved word, call displayWord and exit early
  if (savedWord === '') {
    displayWord();
    return;
  }

  // 2. use chooseBetween to let the user select 'word' or 'characters'
  const select = chooseFromOptions(['word', 'characters']);
  // 3. use enterNumber to ask the user how many times to repeat
  const repeat = enterNumber(message = 'enter a number')
  // 4. use repeatString or repeatCharacters to create a new string, depending on user the user's choice
  if (select === 'word') {
    let newString = repeatString(savedWord, repeat);
  }
  if (select === 'characters') {
    newString = repeatCharacters(savedWord, repeat);
  }
  // 5. render a final before/after message with favoriteWord and the new string from ^ up there
  const finalMessage = beforeAndAfter(savedWord, newString, 'repeat word or characters')
  // 6. alert the rendered message
  alert(finalMessage);




};
