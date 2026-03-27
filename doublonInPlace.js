const array = [15, 15, 9, 15, 14, 7, 16, 16, 29];

// supprimer les doublons d'un tableau in place
for (let i = 0; i < array.length; i++) {
  for (let j = array.length - 1; j > i; j--) {
    if (array[j] === array[i]) {
      array.splice(j, 1); // supprime le doublon à droite
    }
  }
}

console.log(array); // [15, 9, 14, 7, 16, 29]
