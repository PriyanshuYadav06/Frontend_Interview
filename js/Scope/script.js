// var in function scope:
function test() {
  var x = 1;
  if (true) {
    var y = 2; // still part of function scope
  }
  console.log(x, y); // ✅ 10 20
}
test();

// let & const Block Scope
{
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y);
}
// var is not blocked scope
console.log(z);
