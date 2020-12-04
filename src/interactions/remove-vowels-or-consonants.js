'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see their word with all the vowels or all the consonants removed
 */
const removeVowelsOrConsonants = () => {
  // 1. if there is no saved word, call displayWord and exit early
  let change = '';
  if (favoriteWord === '') {
    displayword();
    return;
  }
  // 2. use chooseBetween to let the user select 'vowels' or 'consonants'
  let select = chooseFromOptions(['vowels', 'consonants']);
  // 3. use removeCharacters to create a new string
  //  remove all vowels (lower and upper case) if the user selected "vowels"
  if (select === 'vowels') {
    change = removeCharacters(favoriteWord, 'AEIOUaeiou');
  }
  //  remove all consonants (lower and upper case) if the user selected "consonants"
  if (select === 'consonants') {
    change = removeCharacters(favoriteWord, 'bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ');
  }
  let finalMessage = beforeAndAfter(favoriteWord, change, 'all the vowels or consonants removed')

  alert(finalMessage);



};
