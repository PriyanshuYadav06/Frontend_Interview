// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;

// console.log(first, second, third); // 1 2 3



// const [first, , third] = ["one", "two", "three"];
// console.log(first, third); // "one" "three"




// const [x = 10, y = 20] = [5];
// console.log(x, y); // 5 20

// Swappin the value
// let a=1;
// let b=2;
// [a,b]=[b,a];
// console.log(a,b);



// const [num1,num2,...rest]=[1,2,3,4,5];
// console.log(rest);

// Object Desturucturing 
// const person = { name: "Alice", age: 25 };
// const { name, age } = person;

// // console.log(name); // "Alice"
// // console.log(age);  // 25

// // Renaming Variables && Default
// const {name:fullName , age:years , country="Unknown"}=person;
// console.log(fullName,years,country);


// // Nested Object 
// const user = {
//   id: 101,
//   info: {
//     name: "Eve",
//     address: {
//       city: "Paris"
//     }
//   }
// };

// const { info: { address: { city } } } = user;
// console.log(city); // "Paris"


// Rest in Object 
// const {a,...others}={a:1,b:2,c:3};
// console.log(a);
// console.log(others);


// Use destructuring to extract:

// name of the first user

// age of the second user
const users = [
  { name: "John", age: 22 },
  { name: "Jane", age: 28 }
];
// const [obj1,obj2]=users;
// const {name }=obj1;
// const {age }=obj2;
// for oneLiner 
const [{name},{age}]=users;
console.log(name);
console.log(age);

