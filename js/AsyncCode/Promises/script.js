/*
 1> pending
 2> Fullfill
 3> Rejected
*/
const getData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data == "number") {
        resolve(data);
      } else {
        reject("Data Type Mismatched");
      }
    }, 2000);
  });
};
// Promising Chaining
getData(1)
  .then((data) => {
    console.log(data);
    return getData(2);
  })
  .then((data) => {
    console.log(data);
    return getData(3);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
