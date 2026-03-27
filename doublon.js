const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// supprimer les doublons d'un tableau
let uniqueArray = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (!myIncludes(uniqueArray, element)) {
    uniqueArray.push(element);
  }
}
console.log(uniqueArray); // Output: [15, 9, 14, 7, 16, 29]

