'use strict';

console.log('--- loading logic --> ');

/**
 * repeats each character in a string a given number of times
 * @param {string} [text=''] - the string of characters to repeat
 * @param {number} [repetitions=1] - how many time to repeat each character
 * @returns {string} the string with each character repeated
 */
const repeatCharacters = (text = '', repetitions = 1) => {
  let repreatedChar = '';
  for (let character of text) {
    let charact = character.repeat(repetitions);
    repreatedChar = repreatedChar + charact;

  }
  return repreatedChar;
};

{
  const consoleLog = console.log;
  console.log = () => { };

  try {
    console.assert(repeatCharacters('asdf') === 'asdf', 'Test 0 a');
    console.assert(repeatCharacters() === '', 'Test 0 b');
    console.assert(repeatCharacters('asdf', 0) === '', 'Test 1');
    console.assert(repeatCharacters('asdf', 1) === 'asdf', 'Test 2');
    console.assert(repeatCharacters('asdf', 2) === 'aassddff', 'Test 3');
    console.assert(repeatCharacters('asdf', 3) === 'aaasssdddfff', 'Test 4');
    console.assert(repeatCharacters('', 0) === '', 'Test 5');
    console.assert(repeatCharacters('', 1) === '', 'Test 6');
    console.assert(repeatCharacters('', 2) === '', 'Test 7');
    console.assert(
      repeatCharacters('mississippi', 7) ===
      'mmmmmmmiiiiiiissssssssssssssiiiiiiissssssssssssssiiiiiiippppppppppppppiiiiiii',
      'Test 8'
    );
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}
