const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

// moyenne

let somme = 0;
let count = 0;

for (let index = 0; index < array.length; index++) {
  const note = array[index];
  somme += note;
  count++;
}
let moyenne = somme / count;
console.log(`moyenne: ${moyenne}`); // Output: 15.11
console.log(
  `moyenne: ${moyenne ? moyenne.toFixed(2) : "undefined, le tableau est vide"}`,
); // Output: 15.11

// max
let max = array[0];
for (let index = 1; index < array.length; index++) {
  const element = array[index];
  if (element > max) {
    max = element;
  }
}
console.log(`max: ${max}`); // Output: 29
// console.log(`max: ${max?max:"undefined, le tableau est vide"}`); // Output: 29

// min
let min = array[0];
for (let index = 1; index < array.length; index++) {
  const notes = array[index];
  if (notes < min) {
    min = notes;
  }
}

console.log(`min: ${min}`); // Output: 7
// console.log(`min: ${min?min:"undefined, le tableau est vide"}`); // Output: 7

// occurrence de 15
let count15 = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === 15) {
    count15++;
  }
}
console.log(`occurence de 15: ${count15}`); // Output: 3
// console.log(`occurence de 15: ${count15?count15:"undefined, le tableau est vide"}`); // Output: 3

// valeur la plus fréquente
let mostFrequent = array[0];
let maxCount = 1;
for (let i = 0; i < array.length; i++) {
  let count = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] === array[i]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    mostFrequent = array[i];
  }
}
console.log(`valeur la plus fréquente: ${mostFrequent}`); // Output: 15
// console.log(`valeur la plus fréquente: ${mostFrequent?mostFrequent:"undefined, le tableau est vide"}`); // Output: 15

// nombre d'admissions
let countAdmitted = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element >= 10) {
    countAdmitted++;
  }
}
console.log(`nombre d'admissions: ${countAdmitted}`); // Output: 7
// console.log(`nombre d'admissions: ${countAdmitted?countAdmitted:"undefined, le tableau est vide"}`); // Output: 7

// nombre d'échecs
let countFailed = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element < 10) {
    countFailed++;
  }
}
console.log(`nombre d'échecs: ${countFailed}`); // Output: 2
// console.log(`nombre d'échecs: ${countFailed?countFailed:"undefined, le tableau est vide"}`); // Output: 2

let countPassable = 0;
let countAssezBien = 0;
let countBien = 0;
let countTresBien = 0;
let countExcellent = 0;

for (let index = 0; index < array.length; index++) {
  const note = array[index];

  if (note >= 10 && note < 12) {
    countPassable++;
  } else if (note >= 12 && note < 14) {
    countAssezBien++;
  } else if (note >= 14 && note < 16) {
    countBien++;
  } else if (note >= 16 && note < 18) {
    countTresBien++;
  } else if (note >= 18) {
    countExcellent++;
  }
}

console.log("Passable :", countPassable);
console.log("Assez bien :", countAssezBien);
console.log("Bien :", countBien);
console.log("Très bien :", countTresBien);
console.log("Excellent :", countExcellent);

// version optimisée
let mentions = [
  { nom: "Passable", min: 10, max: 12, count: 0 },
  { nom: "Assez bien", min: 12, max: 14, count: 0 },
  { nom: "Bien", min: 14, max: 16, count: 0 },
  { nom: "Très bien", min: 16, max: 18, count: 0 },
  { nom: "Excellent", min: 18, max: Infinity, count: 0 },
];

for (let i = 0; i < array.length; i++) {
  const note = array[i];

  for (let j = 0; j < mentions.length; j++) {
    if (note >= mentions[j].min && note < mentions[j].max) {
      mentions[j].count++;
      break;
    }
  }
}

console.table(mentions);

// toutes les occurences de chaque note
let occurrences = {};
for (let i = 0; i < array.length; i++) {
  const note = array[i];
  if (occurrences[note]) {
    occurrences[note]++;
  } else {
    occurrences[note] = 1;
  }
}

console.log("Occurrences de chaque note :", occurrences);

// myincludes
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
