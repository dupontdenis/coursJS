const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

function myEvery(array, fxn) {
  for (let i = 0; i < array.length; i++) {
    if (!fxn(array[i])) {
      return false;
    }
  }
  return false;
}

console.log(myEvery(array, (element) => element > 0)); // Output: true
console.log(myEvery(array, (element) => element % 0)); // Output: false 
console.log(myEvery(array, (element) => element <= 20)); // Output: true
console.log(myEvery(array, (element) => element > 10)); // Output: false




