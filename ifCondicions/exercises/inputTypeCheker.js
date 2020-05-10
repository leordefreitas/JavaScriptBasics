// write a program that check if the value is a string a number or boolean
// we want to ensure that is a string

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What`s your favorite ice cream flavor? ", (answer) => {
    console.log(`Answer\`s type: ${typeof(answer)}`);
    rl.close();
});