// "use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//
// let helloMessage = sayHello("Will");
//
// console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
//
// let myName = "Will";
//
// console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(x) {
//     return x === 2;
// }
//
// console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//
// function calculateTip(tip, price) {
//     return tip * price;
// }

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// let userPrice = prompt("What is your total price of your bill?");
//
// let userTip = prompt("What percent would you like to tip?");
//
// let calculatedPrice = calculateTip((parseFloat(userTip)/100), parseFloat(userPrice));
//
// alert(` Your tip will come out to $${calculatedPrice.toFixed(2)}`);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// let discountPercentRandom = Math.random().toFixed(2);
//
// function applyDiscount(price, discount) {
//     let discounted = price * discount;
//     let total = price - discounted;
//     return `$${total.toFixed(2)}`;
// }
//
// console.log(applyDiscount(100, discountPercentRandom));

function person(name, born) {
    console.log("Name   : " + name);
    console.log("Born in: " + born);
}

console.log("Famous people in computing:");
console.log("");
person("Charles Babbage", 1815);
person("Ada Lovelace", 1815);
person("George Boole", 1815);
person("Grace Hopper", 1906);
person("Alan Turing", 1912);
person("Douglas Engelbart", 1925);
person("Bill Gates", 1955);
person("Steve Jobs", 1955);
person("Linus Torvalds", 1969);
person("Tim Berners-Lee", 1955);
console.log("And many more...");