// Given an array of user objects, return an array of usernames of users who are active.
const users = [
  { username: 'alice', active: true },
  { username: 'bob', active: false },
  { username: 'charlie', active: true }
];
const isActive=users.filter((obj)=>obj.active==true).map((obj)=> obj.username);
console.log(isActive);
// Given an array of numbers, use reduce to find the product of all numbers.
const nums=  [1, 2, 3, 4];
const product= nums.reduce((acc,curr)=>{return acc*=curr},1);
console.log(product);
// : Given an array of products, each with a price and a category, find the total price of all products in the "electronics" category.
const products = [
  { name: 'TV', category: 'electronics', price: 300 },
  { name: 'Shoes', category: 'clothing', price: 50 },
  { name: 'Laptop', category: 'electronics', price: 1000 },
  { name: 'Hat', category: 'clothing', price: 20 }
];
const tp=products.filter((obj)=>obj.category=="electronics").reduce((acc,curr,)=>{
    return acc+=curr.price;
},0)
console.log(tp);
//Given an array of students with their names and scores, return the average score of students who scored above 70.
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 68 },
  { name: 'Charlie', score: 90 },
  { name: 'David', score: 55 }
];
// Output: (85 + 90) / 2 = 87.5

