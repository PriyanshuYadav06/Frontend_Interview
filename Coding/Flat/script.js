function flattenDeep(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flattenDeep(el));
    } else {
      result.push(el);
    }
  }
  return result;
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(flattenDeep(arr)); // [1, 2, 3, 4, 5, 6]
