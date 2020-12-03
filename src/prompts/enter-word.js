'use strict';

console.log('--- loading prompt --> ');

/**
 * a function that prompts the user to enter a word
 * if the user enters nothing or cancels, it will prompt them again
 * if the input must contain only letters or a hyphen, or it will prompt again
 * @param {string} [message='enter a word'] - what the user will read in the prompt
 * @returns {string} the user input, it will not be empty
 */
const enterWord = (message = 'enter a word') => {
  let favoriteWord = '';
  while (true) {
    const promptMessage = 'Please enter your favorite word !';
    let word = prompt(promptMessage);
    if (word === '' || word === null) {
      alert('You enter nothing! why?');
      continue;
    }
    if (/^[a-z|-]*$/i.test(word)) {
      favoriteWord = word;
      const confirmMessage = 'Your favorite word is " ' + favoriteWord + '"    is it correct ?';
      const userConfirm = confirm(confirmMessage);
      if (userConfirm) {
        alert(' Your favorite word is  "' + favoriteWord + '"');
        break;
      } else {
        alert('Then what is your favorite word ?');
        continue
      }


    } else {
      alert(' Your favorite word does not contain only  " letters and hyphen! "');
      continue;
    }

  }
  return favoriteWord;

};
module.exports = enterWord;

{
  // store I/O functions and console.log for later
  const consoleLog = console.log;
  const globalPrompt = prompt;
  const globalConfirm = confirm;
  const globalAlert = alert;
  // over-write non-interactive I/O with empty functions
  alert = () => { };
  console.log = () => { };
  // a function that simulates a user inputting a series of values
  const mockUser = (values, index = 0) => () => values[index++];

  try {
    prompt = mockUser(['yes', 'yes']);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === 'yes', 'Test 1');

    prompt = mockUser(['no']);
    confirm = mockUser([true]);
    console.assert(enterWord() === 'no', 'Test 2');

    prompt = mockUser(['x', 'y', 'z']);
    confirm = mockUser([false, false, true]);
    console.assert(enterWord() === 'z', 'Test 3');

    prompt = mockUser(['dogs', 'm1c3', 'dogs']);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === 'dogs', 'Test 4');

    prompt = mockUser(['white chocolate', 'white-chocolate', 'dark-chocolate']);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === 'dark-chocolate', 'Test 5');
  } catch (err) {
    console.error(err);
  }

  // reassign the global functions now that testing is over
  prompt = globalPrompt;
  confirm = globalConfirm;
  alert = globalAlert;
  console.log = consoleLog;
}

{
  // hint:
  const wordRegex = /^[a-z|-]*$/i;

  const isAWord1 = wordRegex.test('asdf');
  const isAWord2 = wordRegex.test('---');
  const isAWord3 = wordRegex.test('as-df');

  const isNotAWord1 = wordRegex.test('1234');
  const isNotAWord2 = wordRegex.test('12-34');
  const isNotAWord3 = wordRegex.test('12df');
}
