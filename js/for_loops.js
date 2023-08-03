//Loops any number in multiplication from 1-10
function showMultiplicationTable (x) {
    for (let i = 1; i <= 10; i++) {
        let answer = (x * i);
        console.log(`${x} x ${i} = ${answer}`);
    }
}

showMultiplicationTable(9)

//Loops random number 10 times and determines if number is even or odd
for (let i = 1; i <= 10; i++) {
    let random = Math.floor((Math.random() * 200) + 20);

    if(random % 2 === 0) {
        console.log(`${random} is even`);
    } else {
        console.log(`${random} is odd`);
    }
}