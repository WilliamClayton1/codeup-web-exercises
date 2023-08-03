function showMultiplicationTable (x) {
    let i = 1;

    do {
        let answer = (x * i);
        console.log(`${x} x ${i} = ${answer}`);
        i++;
    } while (i <= 10);
}

showMultiplicationTable(10)