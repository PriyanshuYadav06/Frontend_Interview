// Function Statement
function a() {
  console.log("a called!");
}
// Function Expression
const b = function () {
  console.log("b called!");
};
// the major difference between function staqtement and function declaration is hoisting  remember this ,its very important

// Function Declaration same as Function Statement
function a() {
  console.log("a called!");
}

// Arrow Function
// dekhlena ekbar
const Arrow=() => {
  console.log("A function with no name is Arrow Function ");
};

// Named Function Expression
var c = function xyz() {
  console.log("Named Function Expression!");
};
// xyz(); // ReferenceError: xyz is not defined (very famous question)
// c();

// First Class Function
// Assign to variables	const greet = function() {}
// Pass as arguments	setTimeout(function() {}, 1000)
// Return from functions	function outer() { return function() {} }

// 1. Assigned to a variable
const sayHello = function () {
  console.log("Hello!");
};

// 2. Passed as argument
function greetUser(fn) {
  fn();
}
greetUser(sayHello); // Pass function as argument

// 3. Returned from a function
function getGreeter() {
  return function () {
    console.log("Hi from returned function!");
  };
}
const greeter = getGreeter();
greeter(); // Call the returned function

// Anoymous Function
(function(){
    console.log("A Funtion Without Name is Called Anoymous Function")
})();
// Higher Order Function
/*
A Higher-Order Function is a function that does one or both of the following:

Takes one or more functions as arguments

Returns a function as its result
 */

// 1. Passing a function as an argument
function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Alice";
  return callback(name);
}

console.log(processUserInput(greet)); // 👉 Hello, Alice

// 2. Returning a function

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 👉 10
// Array methods (map, filter, reduce) – all are higher-order

// Callback Function
/*
A callback function is a function that is passed as an argument to another 
function and is executed later — either synchronously or asynchronously.
 */
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Call the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
