//Manipulating arrays
let listOfColors = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
console.log(listOfColors);

//Push and Unshift method (adding elements)
listOfColors.push('Blue', 'Teal');
listOfColors.unshift('violet');

console.log(listOfColors);//Displays new array

//Pop and Shift method (removing elements)
let used1 = listOfColors.pop();
let used2 = listOfColors.shift();

//Captures the removed item and stores in a variable to call on later
console.log(`I used ${used1}`);
console.log(`I used ${used2}`);

console.log(listOfColors);//Displays new array

//Locating elements - indexOf() and lastIndexOff()
let findColor = listOfColors.indexOf('Blue');//Searches from the beginning of the list.
console.log(findColor);

let findAnotherColor = listOfColors.lastIndexOf('Blue');//Searches from the end of the list.
console.log(findAnotherColor);

//Slicing Method
let listOfNumbers = [1,2,5,1,7,8,3,1,5];

listOfNumbers.slice(2,5);//Will not change the original array, must store in a variable.

let newList = listOfNumbers.slice(2, 5);

console.log(newList);//Takes the first element but stops before the second element.
console.log(listOfNumbers);

//Reverse Method
listOfNumbers.reverse(); //Does not need to be stored in a variable.
console.log(listOfNumbers);

//Sorting Method
listOfNumbers.sort();//Does not need to be stored in a variable.
console.log(listOfNumbers);

//Split Method - takes a string and turns into an array.
let stringGreeting = `Hello my name is will`;

console.log(stringGreeting);

let listGreeting = stringGreeting.split(' ');//Adding a space as the delimiter will split the word

console.log(listGreeting);

//Join Method
let listGreeting2 = listGreeting.join(' ');//Adding a space will join the list to a sentence.

console.log(listGreeting2);