// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(`Answer for ex 1 is: ${result}`)


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
console.log(`Answer for ex 2 is: ${result2.toFixed(2)}`)


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const result3 = (one+two+three)/3
console.log(`Answer for ex 3 is: ${result3.toFixed(5)}`)





// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(`Answer for ex 4 is: ${letters.charAt(2)}`)



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const newFact = fact.replace("j","J")
console.log(`Answer for ex 5 is: ${newFact}`)


// --------------------------------------



