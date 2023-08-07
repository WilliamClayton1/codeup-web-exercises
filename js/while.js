"use strict";

let num = 1;

while(num < 65536) {
    num *= 2
    console.log(num);
}

function getRandomInt(min, max){
    let getRandom = Math.floor((Math.random()  * max) + min);
    return (getRandom);
}

let totalCones = getRandomInt(50,100);

let wantToBuy;

do {
    wantToBuy = getRandomInt(1,5);

    if (wantToBuy <= totalCones) {
        console.log('A customer wants to buy ' + wantToBuy + ". You now have " + totalCones)
        totalCones -= wantToBuy;
    } else {
        console.log("A customer tries to buy " + wantToBuy + " but you have" + totalCones + " cones left")
    }
    console.log("you have " + totalCones + " remaining");
    if (totalCones === 0) {
        console.log("You have sold all the cones");
    }
} while (totalCones > 0)