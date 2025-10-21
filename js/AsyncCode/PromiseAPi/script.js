// Parallel API Request / Promise.all();
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/todos/3",
// ];

// const promises = urls.map((url) =>
//   fetch(url).then((response) => response.json())
// );
// console.log(promises);
// Promise.all(promises).then((data) => {
//   console.log(data);
// });

// promise.allSettleed

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.reject(30);
// const p4 = Promise.resolve(40);

// Promise.all([p1, p2, p3, p4]).then((data) => {
//   console.log(data);
// });

// Promise.allSettled([p1, p2, p3, p4]).then((data) => {
//   console.log(data);
// });

// Promise.race()

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(30);
//   }, 3000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(20);
//   }, 2000);
// });
// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(10);
//   }, 1000);
// });
// Promise.race returns the result of the first settled promise
// Promise.race([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Promise.any()
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(30);
  }, 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(20);
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(10);
  }, 1000);
});

Promise.any([p1, p2, p3]).then((data) => {
  console.log(data);
});
