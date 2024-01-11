// Prompt the user for a list of strings separated by commas.
const userInputString = prompt(
  "Please enter your desired flavors separated by commas.",
  "vanilla, strawberry, coffee"
);

const flavorsArray = userInputString.split(",");
console.log(flavorsArray);

const froyoFlavors = countUniqueFlavors(flavorsArray);
console.table(froyoFlavors);

function countUniqueFlavors(flavorsArray) {
  const uniqueFlavorCount = {};

  flavorsArray.forEach((str) => {
    if (uniqueFlavorCount[str]) {
      // If the flavor already exists in the object, increment its count
      uniqueFlavorCount[str]+= 1;
    } else {
      // If the flavor doesn't exist, add it to the object with a count of 1
      uniqueFlavorCount[str] = 1;
    }
  });
  return uniqueFlavorCount;
}
