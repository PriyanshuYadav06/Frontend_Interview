// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// console.log(c); // ReferenceError
// const c = 20;

// Function declarations are fully hoisted — you can call them before the declaration.
// sayHi();
// function sayHi() {
//   console.log("Hi");
// }

// Function Expression are not Hosited
console.log(greet);
var greet = () => {
  console.log("Are you Happy?");
};
