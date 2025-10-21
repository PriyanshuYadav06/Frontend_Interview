// const original1 = {
//   name: "Priyanshu Yadav",
//   address: {
//     city: "Tarakeswar",
//     zip: 712410,
//   },
// };
// // shallow copy using spread operator
// /*
//     In Shallow copy what happens is only top level properties of js is copied by value otherwise the nexted properties in object or arr will copied by refrence.
//     Below is the exmaple of that
// */
// const copy = { ...original1 };
// copy.name = "Lisa Yadav";
// console.log(copy.name);
// console.log(original1.name);
// copy.address.city = "Kolkata";
// console.log(copy.address.city);
// console.log(original1.address.city);

// Deep Copy -> Copies Everything Recursively;

const original2 = {
  a: 1,
  b: {
    c: 2,
  },
};

const deep = JSON.parse(JSON.stringify(original2));
