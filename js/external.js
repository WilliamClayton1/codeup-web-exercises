"use strict";

console.log("Hey, this is me here in external js. you loaded me in with a src attribute");

//this is an alert message.
alert("This is an alert");

//asks the user for input
let userAnswer = prompt("Is this an alert?");

console.log("Your answer is " + userAnswer);

//ask the user a true or false message
let userConfirm = confirm("We are learning JavaScript.");

console.log("You said it's " + userConfirm + " that we are learning JavaScript.");

