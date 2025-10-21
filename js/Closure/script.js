// Closures
function outer() {
  let x = 10;
  return function inner() {
    x++;
    console.log(x);
  };
}
const fn = outer();
console.log(fn);
fn();
fn();
fn();
fn();
fn();
