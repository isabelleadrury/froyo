const flavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
// prompt("Froyo Flavors");
// const frequencyCounter = {};
// for (let i = 0; i < flavors.length; i++) {
//   const flavor = flavors[i];
//   console.log("flavor", flavor);
//   if (flavor in frequencyCounter) {
//     frequencyCounter[flavor] += 1;
//   } else {
//     frequencyCounter[flavor] = 1;
//   }
// }

let flavor = prompt("Please order your flavors:");

if (flavors !== null) {
  console.log("Your order is " + flavors + "!");
} else {
  console.log("You cancelled the prompt.");
}
