const flavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
const frequencyCounter = {};
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  console.log("flavor", flavor);
  if (flavor in frequencyCounter) {
    frequencyCounter[flavor] += 1;
  } else {
    frequencyCounter[flavor] = 1;
  }
}
prompt(flavors);
