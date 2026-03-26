const array = [1, 2, 3, 1, -2];

// mySome
function mySome(array, fxn) {
  for (let i = 0; i < array.length; i++) {
    if (fxn(array[i])) {
      return true;
    }
  }
  return false;
}

function myEvery(array, fxn) {
  for (let i = 0; i < array.length; i++) {
    if (!fxn(array[i])) {
      return false;
    }
  }
  return false;
}

console.log(mySome(array, (element) => element > 0)); // Output: true
console.log(myEvery(array, (element) => element > 0)); // Output: false

