/* 
TRY NOT TO USE AN OUTSIDE SOURCE FOR THE SOLUTION: THESE EXERCISES AREN'T ABOUT PROVIDING THE CORRECT SOLUTION

- TAKE YOUR TIME IN WORKING THROUGH THESE PROBLEMS. 

- THINK OF MULTIPLE WAYS TO SOLVE THEM. THINK OF EDGE CASES THAT MAY BREAK YOUR CODE. 
KEEP IN MIND THE EFFICIENCY OF YOUR CODE (TIME COMPLEXITY) AS WELL AS THE READABILITY!!! 
(VARIABLE NAMES, LIMITED METHOD CHAINING, FUNCTION NAMES, AND PARAMETER VALUES), AND PSUDEO CODE.

- FOR ANY CODING PROBLEM YOU ATTEMPT TO SOLVE, YOU SHOULD CREATE YOUR OWN TEST CASES AND CONSOLE LOG 
AS YOU BUILD YOUR ALGORITHM IN ORDER TO CHECK YOUR WORK!



 Question 1
Create functions that check if a number is odd or even
If the input is not a number 
output a message "Please enter a number"
return two arguments
The first argument is a string "This number is an even number."
The second argument is a number 20.
"This number is an even number", 20.
If the number is odd, it should output the following
The first argument is a string "This number is an odd number."
The second argument is a number 11.
"This number is an odd number", 11.
============================
Question 2
Create a function that calculates the area of a rectangle. If the input is not a valid pair of numbers (length and width), output the message 
"Please enter valid dimensions." Return two arguments:

The first argument is a string "The area of the rectangle is calculated."
The second argument is the calculated area.
Example output for valid dimensions: "The area of the rectangle is calculated", 30.
*/

const { smart } = require("@babel/template");
const { classExpression } = require("babel-types");
const { palegreen } = require("color-name");

//  Write a function that takes a string as input and reverses the order of words.
// For example, if the input is "Hello World", the output should be "World Hello".

const wordsReversal = (string) => {
  if (!string) {
    return "";
  }
  return string.split(" ").reverse().join(" ");
};
// console.log(wordsReversal("Hello World"))

//  Implement a function to generate the first n numbers in the Fibonacci sequence.
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of
// the two preceding ones.
const fibGenerator = (n) => {
  if (n < 2) {
    return n;
  }
  return fibGenerator(n - 1) + fibGenerator(n - 2);
};
console.log("fib generator", fibGenerator(4));


// Write a function that takes two arrays as input and 
//  returns an array containing elements that are common to both arrays. 
//  For example, given [1, 2, 3] and [2, 3, 4], the output should be [2, 3].
const containsCommonElements = (args1, args2) => {
    return args1.filter(element => args2.includes(element));
    // let commonElements = [];
    // for (let element of array1) {
    //   if (array2.includes(element)) {
    //     commonElements.push(element);
    //   }
    // }
    // return commonElements;

}

let args1 = [1, 2, 3];
let args2 = [2, 3, 4];
console.log(containsCommonElements(args1, args2));

// Create a function to check if a given string is a palindrome.
// A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward 
// (ignoring spaces, punctuation, and capitalization).

const isPalindrome = (string)=>{
// split the string into characters after removing any non characters and spaces
// convert to same case
// const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// is the original equal to the reversed
// let copy = cleanedString.split('').reverse().join('')
// return cleanedString === copy


let cleanedStr = '';

for (let char of string) {
  // Check if character is alphanumeric , then convert case
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
    cleanedStr += char.toLowerCase();
  }
}
let reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;
}
// Radar
// Refer
const string = "A man, a plan, a canal, Panama!"
console.log('palin', isPalindrome(string))


//  Write a function that compares two objects for deep equality. 
// The function should return true if the objects have the same values for all properties, 
// including nested objects and arrays.
const isObjectEqual = (obj1, obj2) => {
// if obj null or not an obj, return false
// get obj number of keys and values of 
// iterate through first obj and check if obj2's values is === 

// lodash _.isEqual
if (obj1 === obj2) {
    return true;
  }
  // Deep equality check
  if (typeof obj1 !== 'object' || obj1 === null || 
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !isObjectEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
let obj1 = {name: 'charles'}
let obj2 = {}
console.log('isObj Equal', isObjectEqual(obj1, obj2))

/*
You are given two non-empty linked lists of arbitrary length representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8 Explanation: 342 + 465 = 807.
*/

/*
convert a 2D array of key-value pairs into an object
*/

const keyValuePairs = [
  ["username", "dcode"],
  ["memberSince", "2020-04-06"],
  ["age", 35],
];

const convertArrayToObject = keyValuePairs => keyValuePairs.reduce((prev, keyValuePairs) => {
  const key = keyValuePairs[0];
  const value = keyValuePairs[1];

  prev[key] = value;
  return prev;
}, {});
// console.log(result)

/* 
find the max or min salary of a list of people objects
*/

const people = [
  { name: "Dom", occupation: "Software Developer", salary: 90000 },
  { name: "Julie", occupation: "Teacher", salary: 46890 },
  { name: "Bob", occupation: "Astronaut", salary: 197330 },
];

const findMaxSalary = people.reduce((prev, person) => {
  if (person.salary > prev) {
    return person.salary;
  }
  return prev;
}, 0);
console.log(findMaxSalary);

/* count occurrences of each string in an array
 */

const colors = [
  "Teal",
  "Terracota",
  "Fushcia",
  "Sunset",
  "Fushcia",
  "Terracota",
  "Fushcia",
];

const colorCount = colors.reduce((prev, color) => {
  prev[color] = (prev[color] || 0) + 1;
  return prev;
}, {});
console.log(colorCount);

const subjects = [
  { subject: "math II", students: 20, instructor: "Tim", level: "Intermediate" },
  { subject: "english III", students: 18, instructor: "Bob", level: "Beginner" },
  {
    subject: "foreign language",
    students: 60,
    instructor: "Peter",
    level: "Advanced",
  },
];

// prev & arr are same values : index = current indexes
const reduction = subjects => subjects.reduce((prev, current, index, arr) => {
    const split = current.subject.split(' ')
    let intro = `${split[0][0]}${split[1][0]}`
    if (index === arr.length -1){
        intro += '.'
    } else {
        intro += ', '
    }
    // whole string instead of just last
    return prev+ intro
},'')
console.log(reduction)
module.exports = { wordsReversal, fibGenerator, convertArrayToObject, reduction, findMaxSalary, isPalindrome };



smart

specific
measureable
achievable
realistic
time-bound
/*
clarifying questions/edge cases 
share the plan 
tallk through what imm doing while coding 
reflect back 
*/

/*
function: 

a parameter is a type, and an argument is an instance.
a parameter gets passed in the function definition while an argument is used in th function call 
f(x) = x*x the variable x is a parameter; in the function call f(2) the value 2 is the argument of the function

function expression does not begin with function keyword, can be anonymous/ommitted - can be ran immediately 
declaration uses function keyword to create a function object which can only be ran when called

var hoists function scope - scope variable is either the function in which it is declared 
(function scope) or the global scope if it's declared outside any function. : can be accessed in the function scope and globally

let block scope variable that can be reassigned 
const block scoped that ccanot be reassigned

return keyword ends the function
console.log() logs the argument passed 


Is 'McDonalds' > 'Burger King' - true, false or an error? Why?
true because lexicographic (dictionary) order.

double quotes : In JSON and some other contexts, double quotes are the standard for enclosing strings.
single quotes: can be used inside double quotes to define a string within a string
backticks  define string literals : 

arrow functions do not have their own 'this' so cannot be instantiateed with 'new'

higher-order function is a concept from functional programming that refers to a function that either:

Takes one or more functions as arguments, or
Returns a function as its result.
*/

/*
let a = 10;
let b = 20;

[a , b] = [b, a];  
[a,b] = [b,a] => [ 20, 10 ]
Is there any difference if the code is written like so?

const a = 10;
const b = 20;

[a , b] = [b, a];
> [a,b] = [b,a]
Uncaught TypeError: Assignment to constant variable.
*/

/*
Well Of Ideas
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
*/


