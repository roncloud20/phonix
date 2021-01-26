// Calling the lodash library
var _ = require('lodash');

// Outputting the lodash to see if it works
// console.log(_);

// Creating an array variable of numbers
var array = [1,2,3,4,5,6,7,8,9];

// To display the answer
console.log("answer", _.without(array, 7))