const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

/**
 * Trouve la valeur minimale et maximale dans un tableau.
 * @param {Array} array - Le tableau à parcourir
 * @returns {*} - La valeur minimale ou undefined si le tableau est vide
 */

function myMinMax(array) {
  if (array.length === 0) {
    return { min: undefined, max: undefined }; // ou une autre valeur par défaut
  }
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return { min, max };
}

const result = myMinMax(array);
console.log(`min: ${result.min}, max: ${result.max}`); // Output: min: 7, max: 29

// en L2: décomposition de l'objet résultat pour n'avoir que les valeurs min et max
const { min, max } = myMinMax(array);
console.log(`min: ${min}, max: ${max}`); // Output: min: 7, max: 29

/**
 * Trouve la valeur minimale et maximale et leur index dans un tableau.
 * @param {Array} array - Le tableau à parcourir
 * @returns {*} - un objet avec deux propriétés min et max qui contiennent respectivement un objet avec l'index et la valeur minimale et maximale ou undefined si le tableau est vide
 * exemple de retour: { min: { index: 5, value: 7 }, max: { index: 8, value: 29 } }
  */

function myMinMaxWithIndex(array) {
  if (array.length === 0) {
    return { min: undefined, max: undefined }; // ou une autre valeur par défaut
  }
  let min = array[0];
  let max = array[0];
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }
  return { min: { index: minIndex, value: min }, max: { index: maxIndex, value: max } };
}

const resultWithIndex = myMinMaxWithIndex(array);
console.log(
  `min: ${resultWithIndex.min.value} à l'index ${resultWithIndex.min.index}, max: ${resultWithIndex.max.value} à l'index ${resultWithIndex.max.index}`,
); // Output: min: 7 à l'index 5, max: 29 à l'index 8