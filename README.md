# Favorite word 

> A simple program allows the user to enter his favorite word , and displays it , or remove it.In addition it allows 
the user to reverse , remove vowels or consonants , repeat characters or his favorite word number of times.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

The program is a part of HYF BE bootcamp curriculum , the main goal , is using different function and call them from different JS files , and understand the different type of functions `prompt`,`interaction`,`logic` and `render` 

## Screenshots
![Example screenshot](/img/favorite-word.png)

## Technologies
* JavaScript
* HTML
* CSS
* VSC code
* node 14.15.1
* npm 6.14.9
* study-lenses 0.0.50

## Setup
open index.html in your browser and enjoy! typing your favorite-word

## Code Examples

```js
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
```


## Features
List of features ready and TODOs for future development

* 
* 
* 

To-do list:

* 
* 

## Status
Project is: _in progress_

## Inspiration
Project inspired by  HackYourFuture BE

## Contact
Created by [@Ina-arpine,@jraoul2002,@kemmy72,@LiubovPlugar,@samirm00] 
