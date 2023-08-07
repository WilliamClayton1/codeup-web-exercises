"use strict";

let userAnswer;

do{
    userAnswer = parseInt(prompt("Choose an odd number between 1 and 50"));
    //create a function to check for an even number
    if(userAnswer % 2 === 0) {

        alert("That number is not odd. Please try again");
        continue;
    }

    if(userAnswer < 1 || userAnswer > 49){
        alert("That number us out of range");
        continue;
    }

    if (!isFinite(userAnswer)) {
        alert("That is not a number.");
        continue;
    }
    break;
}while(true)


console.log(userAnswer);

for (let i = 0; i < '50'; i++) {
    if(i % 2 === 0) {
        continue;
    }

    if(userAnswer === i) {
        console.log("A wild " + userAnswer + " has appeared!")
        continue;
    }
    console.log("Here is an odd number: " + i);
}