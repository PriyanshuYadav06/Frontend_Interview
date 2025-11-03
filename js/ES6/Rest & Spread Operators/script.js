// Array Spread Operator 
const arr1=[1,2,3];
const arr2=[3,4,5];
console.log([...arr1,...arr2]);
// Object Spread Operator
// Spread works for both arrays and objects, but for objects, later properties overwrite earlier ones if keys conflict.
const obj1 = { a: 1, b: 2,c:4 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }


// Rest Operator 
// Array destructuring
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
// Object destructuring
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }
// Function parameters
function sum(...nums){
   return nums.reduce((acc,curr)=>{
        return  acc+=curr;
    },0)

}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

