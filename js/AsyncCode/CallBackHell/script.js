const getData = (Data, callback) => {
  setTimeout(() => {
    console.log(Data);
    callback();
  }, 2000);
};
// Call Back Hell
console.log("Fetching Data 1");
getData("A", () => {
  console.log("Fetching Data 2");
  getData("B", () => {
    console.log("Fetching Data 3");
    getData("C", () => {});
  });
});
