const array = [1, 2, 3, 1, 2, 3];

let value = 3;
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
