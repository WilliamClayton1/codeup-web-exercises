"use strict";

console.log("Hey, this is me here in external js. you loaded me in with a src attribute");

alert("Welcome to my Website!");

let userColor = prompt("What is your favorite color?");
alert("Great, " + userColor + " is my favorite color too!");

//How much are your movies.
let littleMermaid = prompt('How many days will you rent "The Little Mermaid"?');

let brotherBear = prompt('How many days will you rent "Brother Bear"?');

let hercules = prompt('How many days will you rent "Hercules"?');

let totalCost = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3);

alert("You owe in total: $" + totalCost + " for your movies." )

//How much are you getting paid.
let google = 400;

let amazon = 380;

let facebook = 350;

let googleHours = prompt("How many hours did you work for Google?");

let amazonHours = prompt("How many hours did you work for Amazon?");

let facebookHours = prompt("How many hours did you work for Facebook?");

let totalPaid = (googleHours * google) + (amazonHours * amazon) + (facebookHours * facebook);

alert("You will be paid $" + totalPaid + " this week!");

//Can you attend class?
let isClassFull = confirm("Is the class full?");

let schedule = confirm("Does this class fit into your schedule?");

if (isClassFull === false && schedule === true){
    alert("AWESOME!!! You've been enrolled in class.");
} else {
    alert("Sorry, you will not be able to attend this class.");
}

//Can you get an offer?
let numberOfProducts = prompt("How many items do you want to buy?");

let offer = confirm("Is the offer still valid?");

let premiumMember = confirm("Are you a premium member?");

if (offer === false) {
    alert("Sorry, offer could not be applied.");
} else if (premiumMember === true || (numberOfProducts > 2 && offer === true)) {
    alert("Nice! The offer has been applied.");
} else {
    alert("Sorry, offer could not be applied.");
}
