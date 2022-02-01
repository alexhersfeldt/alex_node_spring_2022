// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
console.log(`The answer to ex 1 is: ${letters[1]}`)


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
const f1 = {name: "jack"}, f2 = {name: "jill"}, f3 = {name: "johhny"}
friends.push(f1, f2, f3)



// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const indexOfNr = significantMathNumbers.indexOf(1729)

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0,"Hamburger", "soda","pizza" )


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  


const dinnerTray = [...diet]

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
console.log("The answer to ex 7 is:")

const indexOfB = lettersExpanded.indexOf("b")

for (let index = indexOfB; index < lettersExpanded.length; index += 2) {
    console.log(lettersExpanded[index])
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("The answer to ex 8 is: ")
for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] >6 | numbers[index] < 0) {
        console.log(numbers[index])
    } else {
        discardedNumbers.push(numbers[index])
    } 
}
console.log(`The discarded numbers are ${discardedNumbers}`)

// --------------------------------------


