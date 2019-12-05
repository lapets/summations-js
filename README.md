# summations-js
Library to enumerate all natural number lists with a target sum.

[![npm version](https://badge.fury.io/js/summations.svg)](https://badge.fury.io/js/summations)

## Package Installation and Usage

The package is available on npm:
```shell
npm install summations
```
The library can be imported in the usual ways:
```javascript
var summations = require('summations');
```
The library also supports standalone usage in browsers:
```html
<script src="https://lapets.github.io/summations/lib/summations.js"></script>
```

## Examples

It is possible to enumerate all possible lists of natural numbers of a given length that add up to a target sum.
```javascript
var results = summations.sumLen(2, 3);
```
Given the object above, we can query it for each value 
```javascript
> results
[
  [1, 1, 0],
  [0, 1, 1],
  [1, 0, 1],
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
]
```

## Testing

Unit tests are included in `test/test.js`. They can be run using [Mocha](https://mochajs.org/):
```javascript
npm test
```
