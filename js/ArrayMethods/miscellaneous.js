// 1. sort()
/*
What it does:
Sorts the elements of an array in place (modifies the original array).
By default, sorts elements as strings in ascending order.
You can provide a compare function to define custom sorting (numbers, objects, etc.).
change the original array
*/
const nums = [10, 2, 33, 4];

// Default (string) sort:
nums.sort();
console.log(nums); // ["10", "2", "33", "4"] — which is weird because string sorting!

// Proper numeric sort:
nums.sort((a, b) => a - b);
console.log(nums); // [2, 4, 10, 33]

// Sort descending:
nums.sort((a, b) => b - a);
console.log(nums); // [33, 10, 4, 2]

// 2. reverse()
// What it does:
// Reverses the order of elements in place (modifies the original array).
// change the original array

const arr = [10, 2, 33, 4];
arr.reverse();
console.log(arr);

// 3. flat()
// What it does:
// Flattens nested arrays by removing nested array structure up to a specified depth.
// Returns a new array (does not modify original).

const brr = [1, [2, 3], [4, [5, 6]]];

// Flatten one level (default):
console.log(brr.flat()); // [1, 2, 3, 4, [5, 6]]

// Flatten two levels:
console.log(brr.flat(2)); // [1, 2, 3, 4, 5, 6]

// Flatten infinitely (very deep):
console.log(brr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// Some extra Good to know 
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));        // false
console.log(Array.isArray('string'));  // false

