"use strict";

let car = {
    make: 'Nissan',
    model: 'Versa',
    year: 2012,
    color: 'Grey',
    features: ['A.C', 'Bluetooth Connectivity', 'GPS Navigation']
};

let secondCar = {
    make: 'Hyundai',
    model: 'Sonata',
    year: 2010,
    color: 'White',
    features: ['A.C', 'Bluetooth Connectivity', 'GPS Navigation', 'Sunroof', 'Power seats']
}

//Put the objects into an array
let myGarage = [car, secondCar];

//Using a loop to call the object in an array
// for (let i = 0; i < myGarage.length; i++) {
//     console.log(`This is my car ${myGarage[i].make} ${myGarage[i].model}`);
// }

//Adding a honk method on a car object
car.honk = function(){
    alert('Honk!');
}

car.informationLog = function(){
    console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
}

secondCar.informationLog = function(){
    console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
}

//Loop to pass the method in the objects
for(let car of myGarage) {
    car.informationLog();
}
//This is how to call the property of the object
// console.log(car.model);

//Ways to assign properties to an object
// car.make = 'Nissan';
// car.model = 'Verse';
// car.year = 2012;
// car.color = 'Grey';
// car.features = ['A.C', 'Bluetooth Connectivity', 'GPS Navigation'];

// let cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.

// let myCard = `<div class="card">
//     <div>Book Title: ${obj.prop}.</div>
//     <div>Book Author: ${obj.prop}.</div>
//     <div>Book Genre: ${obj.prop}.</div>
// </div>`

//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.

//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).

//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = ""; //bucket to store the HTML you build in the loop