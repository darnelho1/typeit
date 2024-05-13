# TypeIt: A jQuery Animated Typing Plugin

### Description
A lightweight jQuery plugin that animates placeholder text for you. You can pass to it an array of strings that will be dynamically typed with human-like typing style.

## Install with npm

`npm install typeit-ph`

## Usage

In your JavaScript file which uses jQuery, require in the module.


## Syntax
```typeitPH(_elementID_, [[_wordsArray_]])```

### Parameters

#### elementID
>A string with jquery-style id selector syntax

#### wordsArray
>Optional. Array of strings to be typed in the placeholder of an html element. Random words will be selected if no wordsArray argument is supplied.


## Example:

```html
<input id="searchBox"></input>
```

```js
// This file expects that you are using jQuery
var typeitPH = require('typeit-ph');

typeitPH('#searchBox', ['Queen Anne', 'Ballard', 'Fremont']);
```
