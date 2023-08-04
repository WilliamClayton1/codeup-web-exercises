"use strict";

let userAnswer = parseInt(prompt('Pick an odd number between 1 and 50.'));

while(isNaN(userAnswer)) {
    alert(`That's not right, Try again.`);
    userAnswer = parseInt(prompt('Pick an odd number between 1 and 50.'));
}


