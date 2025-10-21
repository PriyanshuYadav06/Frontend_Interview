/*
 Async - await synatx
*/
const getData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
// IIFE (Immediately Invoked Function Expression).
const fetchData = (async () => {
  const x1 = await getData(1);
  console.log(x1);
  const x2 = await getData(2);
  console.log(x2);
  const x3 = await getData(3);
  console.log(x3);
  const x4 = await getData(4);
  console.log(x4);
})();
