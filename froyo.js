const flavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];

let flavor = prompt("Please order your flavors:");
console.log(flavor);

if (flavor !== null) {
  console.log("Your order is ", flavor);
} else {
  console.log("You cancelled the prompt.");
}

const frequencyCounter = {};
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  console.log("flavors", flavor);
  if (flavor in frequencyCounter) {
    frequencyCounter[flavor] += 1;
  } else {
    frequencyCounter[flavor] = 1;
  }
}
console.log("frequency", frequencyCounter);
