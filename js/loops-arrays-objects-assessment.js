// "use strict";
//
// /**
//  * Write your solutions here
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */
//
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

function isNegative(num){
    return num < 0;
}


// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false

function isTen(num){

    return num === 10;
}


// Write a function named double that accepts a number and returns the number doubled.
//
// double(5) // 10
// double(20) // 40

function double(num){
    return num * 2;
}

// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
//
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
// remove9s([1, 2, 3])     // [1, 2, 3]
// remove9s([9, 9, 9])     // []

function remove9s(arr){
    let returnArr = []; //bucket?

    arr.forEach((num) => {
        // if(num === 9){
        //     // continue;
        //     console.log()
        // } else {
        //     returnArr.push(num);
        // }

        if(num !== 9){
            returnArr.push(num);
        }
    })
    return returnArr;
}


// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5

function average(arr){

    let sumBucket = 0;
    arr.forEach((num) => sumBucket += num);

    return sumBucket / arr.length;
}


// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

function countOdds(arr){
    let count = 0;
    arr.forEach((num) => {
        if(num % 2 === 1){
            count++;
        }
    })

    return count;
}


// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100

function averageSales(arrObj){
    let sumBucket = 0;

    for(let salesObject of arrObj){ //let elementVariable of arrayName
        sumBucket += salesObject.sales;
    }

    return sumBucket / arrObj.length;
}


// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

function convertNameToObject(str){

    return {firstName: str.split(" ")[0], lastName: str.split(" ")[1]};
}

// Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
// countVowels('Hello, Codeup!') // 5
// countVowels('ABCDE!') // 2

function countVowels(str){
    let count = 0;

    let strArray = str.split("");

    strArray.forEach((letter) => {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            count++
        }
    })

    return count;
}



// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
// analyzeWord('codeup')
// // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

function analyzeWord(str){

    return {word: str, numberOfLetters: str.length, numberOfVowels: countVowels(str)};
}


// Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
//
// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"

function capitalizeName(str) {
    if (str.includes(" ") && str.includes(",")) {
        let firstName = str.split(" ")[0];
        let lastName = str.split(" ")[1];
        let firstNameSplit = firstName.split("");
        let lastNameSplit = lastName.split("");
        if (firstNameSplit[0] === firstNameSplit[0].toUpperCase() && (lastNameSplit[0] === lastNameSplit[0].toUpperCase())) {
            return `${firstName + ' ' + lastName}`;
        } else {
            firstNameSplit[0] = firstNameSplit[0].toUpperCase();

            lastNameSplit[0] = lastNameSplit[0].toUpperCase();
            lastNameSplit[1] = lastNameSplit[1].toUpperCase()

            firstName = firstNameSplit.join("");
            lastName = lastNameSplit.join("");

            return `${firstName + ' ' + lastName}`;
        }
    } else if (!str.includes(" ") && str.includes(',')) {
        let firstName = str.split(",")[0];
        let lastName = str.split(",")[1];
        let firstNewSplit = firstName.split("");
        let lastNewSplit = lastName.split("");
        if (firstNewSplit[0] === firstNewSplit[0].toUpperCase() && (lastNewSplit[0] === lastNewSplit[0].toUpperCase())) {
            return `${firstName + ' ' + lastName}`;
        } else {
            firstNewSplit[0] = firstNewSplit[0].toUpperCase();

            lastNewSplit[0] = lastNewSplit[0].toUpperCase();
            lastNewSplit[1] = lastNewSplit[1].toUpperCase()

            firstName = firstNewSplit.join("");
            lastName = lastNewSplit.join("");

            return `${firstName + ' ' + lastName}`;
        }
    } else if (!str.includes(" ") && !str.includes(',')) {
        return str;
    }
}