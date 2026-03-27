const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

let value = 15;
let found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    found = true;
    break;
  }
}

console.log(
  `la valeur ${value} ${found ? "est" : "n'est pas"} dans le tableau ${array}`,
);

value = 0;
found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    found = true;
    break;
  }
}

console.log(
  `la valeur ${value} ${found ? "est" : "n'est pas"} dans le tableau ${array}`,
);

value = "dupont";
found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    found = true;
    break;
  }
}

console.log(
  `la valeur ${value} ${found ? "est" : "n'est pas "} dans le tableau ${array}`,
);

// Stop coding like a 🦜, use the function myIncludes instead

/**
 * Vérifie si un tableau contient une valeur donnée.
 * @param {*} array - Le tableau à parcourir
 * @param {*} value - La valeur recherchée
 * @returns {boolean} - true si la valeur est trouvée, sinon false
 */

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(array, 15)); // Output: true
console.log(myIncludes(array, 5)); // Output: false
console.log(myIncludes(array, 16)); // Output: true
console.log(myIncludes(array, 20)); // Output: false

//🧙🏽‍♂️
/**
 * 
 * @param {*} array - Le tableau à parcourir
 * @param {*} value - La valeur recherchée
 * @param {*} startIndex - L'index à partir duquel commencer la recherche (par défaut 0)
 * @returns @returns {boolean} - true si la valeur est trouvée, sinon false
 */
function includesFrom(array, value, startIndex = 0) {
  for (let i = startIndex; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
