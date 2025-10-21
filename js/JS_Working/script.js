// Problem -> 1
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   setTimeout(() => console.log("Timeout inside Promise"), 0);
// });

// console.log("End");

// Problem -> 2
// console.log("Start");

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   setTimeout(() => console.log("Timeout 1"), 0);
// });

// setTimeout(() => {
//   console.log("Timeout 2");
//   Promise.resolve().then(() => console.log("Promise 2"));
// }, 0);

// console.log("End");

// Problem -> 3
// setTimeout(() => console.log("A"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
//   })
//   .then(() => {
//     console.log("D");
//   });

// console.log("E");

// Problem -> 4
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise1");
//     return Promise.resolve();
//   })
//   .then(() => console.log("Promise2"));

// queueMicrotask(() => console.log("Microtask"));

// console.log("End");

// Problem -> 5
console.log("X");

Promise.resolve()
  .then(() => console.log("Y"))
  .then(() => console.log("Z"));

queueMicrotask(() => console.log("W"));

console.log("V");

// Problem -> 6
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
test();
console.log("3");
