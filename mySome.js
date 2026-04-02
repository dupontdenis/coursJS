const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

// mySome
function mySome(array, fxn) {
  for (let i = 0; i < array.length; i++) {
    if (fxn(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(mySome(array, (element) => element > 0)); // Output: true
console.log(mySome(array, (element) => element % 2)); // Output: false
console.log(mySome(array, (element) => element <= 20)); // Output: true
console.log(mySome(array, (element) => element == 15)); // Output: true
