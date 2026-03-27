const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

/**
 * Trouve la valeur minimale dans un tableau.
 * @param {Array} array - Le tableau à parcourir
 * @returns {*} - La valeur minimale ou undefined si le tableau est vide
 */
function myMin(array) {
  if (array.length === 0) {
    return undefined; // ou une autre valeur par défaut
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(myMin(array)); // Output: 7

function myMinfrom(array, startIndex = 0) {
  if (array.length === 0 || startIndex >= array.length) {
    return undefined;
  }
  let min = array[startIndex];
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(myMinfrom(array)); // Output: 7
console.log(myMinfrom(array, 6)); // Output: 16

// note: on peut aussi utiliser en L2 Math.min avec l'opérateur de décomposition
console.log(Math.min(...array)); // Output: 7


/**
 * Trouve la valeur minimale et son index dans un tableau.
 * @param {Array} array - Le tableau à parcourir
 * @returns {*} - un objet avec deux propriétés index et value qui contiennent respectivement l'index et la valeur minimale ou undefined si le tableau est vide
 * exemple de retour: { index: 5, value: 7 }
 */
function myMinWithIndex(array) {
  if (array.length === 0) {
    return undefined;
  }
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  return { index: minIndex, value: min };
}

console.log(myMinWithIndex(array)); // Output: { index: 5, value: 7 } 
console.log(myMinWithIndex([])); // Output: undefined
console.log(myMinWithIndex([3, 2, 1, 4])); // Output: { index: 2, value: 1 }

const result = myMinWithIndex(array);
console.log(`min: ${result.value}, index: ${result.index}`); // Output: min: 7, index: 5

// en L2: décomposition de l'objet résultat pour n'avoir que les valeurs min et index
const { index, value } = myMinWithIndex(array);
console.log(`min: ${value}, index: ${index}`); // Output: min: 7, index: 5

// en L2: décomposition de l'objet résultat pour n'avoir que les valeurs min et index avec des noms de variables différents
const { value: lenomquejeveux, index: indeendroitdumin } = myMinWithIndex(array);
console.log(`min: ${lenomquejeveux}, index: ${indeendroitdumin }`); // Output: min: 7, index: 5


