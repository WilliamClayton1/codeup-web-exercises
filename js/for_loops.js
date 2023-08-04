// Loops any number in multiplication from 1-10
function showMultiplicationTable (x) {
    for (let i = 1; i <= 10; i++) {
        let answer = (x * i);
        console.log(`${x} x ${i} = ${answer}`);
    }
}

showMultiplicationTable(9)

// Loops random number 10 times and determines if number is even or odd
for (let i = 1; i <= 10; i++) {
    let random = Math.floor((Math.random() * 200) + 20);

    if(random % 2 === 0) {
        console.log(`${random} is even`);
    } else {
        console.log(`${random} is odd`);
    }
}

//For loop creates a pyramid from 1 to 9
for (let i = 1; i < 10; i++) {
    let convert = String(i);
    console.log(convert);
    for (i = 2; i < 10; i++) {
        let convert = String(i);
        let repeater = convert.repeat(2);
        console.log(repeater);
        for (i = 3; i < 10; i++) {
            let convert = String(i);
            let repeater = convert.repeat(3);
            console.log(repeater);
            for (i = 4; i < 10; i++) {
                let convert = String(i);
                let repeater = convert.repeat(4);
                console.log(repeater);
                for (i = 5; i < 10; i++) {
                    let convert = String(i);
                    let repeater = convert.repeat(5);
                    console.log(repeater);
                    for (i = 6; i < 10; i++) {
                        let convert = String(i);
                        let repeater = convert.repeat(6);
                        console.log(repeater);
                        for (i = 7; i < 10; i++) {
                            let convert = String(i);
                            let repeater = convert.repeat(7);
                            console.log(repeater);
                            for (i = 8; i < 10; i++) {
                                let convert = String(i);
                                let repeater = convert.repeat(8);
                                console.log(repeater);
                                for (i = 9; i < 10; i++) {
                                    let convert = String(i);
                                    let repeater = convert.repeat(9);
                                    console.log(repeater);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//loop creates an output of 100 to 5 in increments of 5
for(let i = 100; i > 1; i = i -5) {
    console.log(i);
}

