// this program will spell out a string character by character
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give me a string: ', (answer) => {
    // loop over each character in the string
    for (let i = 0; i < answer.length; i++) {
        const char = answer[i]

        // remove the spaces
        // break is to cancel all the box so they go out to the outside box
        if (char === ' ') break;
        console.log(char)
    }
    console.log('done');
    rl.close();
});