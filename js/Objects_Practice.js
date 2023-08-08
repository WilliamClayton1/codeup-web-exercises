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