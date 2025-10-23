let fruits = ["Banana", "Apple", "Cherry", "Date"];
// Add elements to the end of the array
fruits.push("Elderberry", "Fig");
console.log("After push:", fruits); // ["Banana", "Apple", "Cherry", "Date", "Elderberry", "Fig"]

// Remove the last element from the array
fruits.pop();
console.log("After pop:", fruits); // ["Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Add elements to the beginning of the array
fruits.unshift("Grape", "Honeydew");
console.log("After unshift:", fruits); // ["Grape", "Honeydew", "Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Remove the first element from the array
fruits.shift();
console.log("After shift:", fruits); // ["Honeydew", "Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Slice
// Does not change the original Array
// returns a new array
const numbers = [10, 20, 30, 40, 50, 60];
// Get a part of the array from index 1 to 5 (not including 5)
const sliceArr = numbers.slice(1, 5);
console.log(sliceArr);
// Splice
// modify the original array
numbers.splice(1, 3, 2, 3, 4);
console.log(numbers);
// Join
// join() is an array method that combines all elements of an array into a single string.
// It puts a separator between the elements when joining them.
// Does NOT modify the original array.
//it defaults to a comma ,
const words = ["hello", "world", "JS"];

const Nwords = words.join("-");
console.log(Nwords);
console.log(words);

// What is includes()?

// includes() is an array method that checks if an array contains a certain element.

// It returns true if the element is found, otherwise false.

// The check uses strict equality (===).

// Does not modify the original array.
// array.includes(searchElement, fromIndex)
// searchElement: The element to search for.
// fromIndex (optional): The position to start searching from (default is 0).
const letters = ["a", "b", "c", "d", "e"];
console.log(letters.includes("c")); // true
console.log(letters.includes("z")); // false
console.log(letters.includes("b", 2)); // false (starts search at index 2)
// What is concat()?
// concat() is an array method that merges two or more arrays into a new array.
// It does NOT modify the original arrays.
// You can also use it to add values to an array by passing them as arguments.
// You can pass multiple arrays or values as arguments.
// Returns a new array with the concatenated elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7];

// Merge arrays
const merged = arr1.concat(arr2, arr3);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7]

// Original arrays are unchanged
console.log(arr1); // [1, 2, 3]

// Add individual values
const added = arr1.concat(8, 9);
console.log(added); // [1, 2, 3, 8, 9]
