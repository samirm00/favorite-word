<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [data.js](#srcdatajs)
- [interactions](#interactions)
  - [repeat-word-or-characters.js](#srcinteractionsrepeat-word-or-charactersjs)
  - [reverse-word.js](#srcinteractionsreverse-wordjs)
- [logic](#logic)
  - [repeat-characters.js](#srclogicrepeat-charactersjs)
  - [repeat-string.js](#srclogicrepeat-stringjs)
  - [reverse-string.js](#srclogicreverse-stringjs)
- [prompts](#prompts)
- [renders](#renders)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# [./src/data.js](./src/data.js?study)

<a name="favoriteWord"></a>

## favoriteWord : <code>string</code>

- the user's saved word

---

# Interactions

These functions' role is to implement entire user interactions.
They will use the _prompts_ and _renders_ to interact with the user, and _logic_ to process user data.

You will call interaction functions from your UI using the `onclick` attribute.

Here are some general rules for your interaction functions:

- they should not take any arguments
- they should not return any values
- they can use functions declared in `/logic`, `/prompts` and `/renders`
- they can read and modify data variables stored in data.js

---

## [./src/interactions/repeat-word-or-characters.js](./src/interactions/repeat-word-or-characters.js?study)

<a name="repeatWordOrCharacters"></a>

## repeatWordOrCharacters()

allows a user to see either the whole word repeated, or their word with each character repeated.
if there is no word, the user is told so

---

## [./src/interactions/reverse-word.js](./src/interactions/reverse-word.js?study)

<a name="reverseWord"></a>

## reverseWord()

allows a user to set a new value for the saved word.
if there's already a saved word, they are asked to confirm replacing it

[TOP](#DOCS)

---

---

# Logic

these functions' role is to process and transform data. Logic functions are your standard "coding challenge" type function. In goes some data, out comes some new data.

Here are some general rules for your logic functions:

- they always need at least one argument
- they will always return a value
- they only use console.log
- they cannot use prompt, alert, or confirm

---

## [./src/logic/repeat-characters.js](./src/logic/repeat-characters.js?study)

<a name="repeatCharacters"></a>

## repeatCharacters([text], [repetitions]) ⇒ <code>string</code>

repeats each character in a string a given number of times

**Returns**: <code>string</code> - the string with each character repeated

| Param         | Type                | Default                               | Description                            |
| ------------- | ------------------- | ------------------------------------- | -------------------------------------- |
| [text]        | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string of characters to repeat     |
| [repetitions] | <code>number</code> | <code>1</code>                        | how many time to repeat each character |

---

## [./src/logic/repeat-string.js](./src/logic/repeat-string.js?study)

<a name="repeatString"></a>

## repeatString([text], [repetitions]) ⇒ <code>string</code>

repeats a string a given number of times

**Returns**: <code>string</code> - the repeated string

| Param         | Type                | Default                               | Description                        |
| ------------- | ------------------- | ------------------------------------- | ---------------------------------- |
| [text]        | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string to repeat               |
| [repetitions] | <code>number</code> | <code>1</code>                        | how many time to repeat the string |

---

## [./src/logic/reverse-string.js](./src/logic/reverse-string.js?study)

<a name="reverseString"></a>

## reverseString([str]) ⇒ <code>string</code>

reverses a string

**Returns**: <code>string</code> - the reversed string

| Param | Type                | Default                               | Description           |
| ----- | ------------------- | ------------------------------------- | --------------------- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | the string to reverse |

[TOP](#DOCS)

---

---

# Prompts

these functions' role is to gather and validate user input
we'll call these functions "prompts".

Here are some general rules for your prompt functions:

- they don't always need an argument
- they will always return a value
- they must use at least one prompt() or confirm()
- they can also use alert & console.log

[TOP](#DOCS)

---

---

# Renders

These functions' role is to format data so it's nice for users to read.

Here are some general rules for your render functions:

- they always need at least one argument (you need some data to display!)
- they will return a formatted version of your data
- they can only use console.log
- they cannot use prompt, alert or confirm (you will alert the return value)

[TOP](#DOCS)

---

<!-- END DOCS -->
