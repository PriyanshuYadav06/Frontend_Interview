const reverse = (str) => {
  let n = str.length;
  let rev = "";
  for (let i = n - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
console.log(reverse("ABC"));
