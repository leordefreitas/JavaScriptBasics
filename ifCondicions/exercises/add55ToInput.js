// write me a program that takes in a user`s number input and add 55 to it
// (show than the results)

// refactor this program to add 55 to the user`s number if it`s even, and
// 100 to the user`s number if it`s odd

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Give me a number? ", (answer) => {
    // the add signal is to change the string to number
    // convert user`s input to number
    const numberAnswer = +answer;

    // check if the number is even(inpar)
    const isAnswerEven = numberAnswer % 2 === 0;

    // tarnary is trueOrFalse ? returnThisTrue : returnThisFalse
    // calculate the sum
    const sum = numberAnswer + (isAnswerEven ? 55 : 100);
    console.log(`sum = ${sum}`);
    rl.close();
});
