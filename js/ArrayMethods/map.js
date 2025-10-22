const numbers = [1, 2, 3, 4];
/*
map is an array method in JavaScript.
It creates a new array by transforming each element of the original array.
It does not modify the original array.
The transformation is done by a callback function you provide.
*/

const newNums=numbers.map((num,idx,numbers)=>{
    return num*2;
})
console.log(numbers);
console.log(newNums);