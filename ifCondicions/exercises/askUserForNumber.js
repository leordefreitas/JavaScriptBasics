// this program should ask a user to input a number. if their input IS NOT a
// number, tell them, otherwise just print out something like 'WOW 22 is a
// great number'

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
/* 
rl.question("Please give me a number =)? ", (answer) => {
    // convert user`s input to a number
    const numberAnswer = +answer;

    if (typeof(numberAnswer) === 'number') {
        console.log(`WOW, ${answer} is a great number`);
    }
    else {
        console.log(`I\`m sorry, but ${answer} is not a number`);
    }
    rl.close();
}); */

// here is using the function isNaN() where verifi and give a boolen
rl.question("Please give me a number =)? ", (answer) => {
    // convert user`s input to a number
    const numberAnswer = +answer;
    if (isNaN(numberAnswer)) {
        console.log(`I\`m sorry, but ${answer} is not a number`);
    }
    else {
        console.log(`WOW, ${answer} is a fantastic number !!!!`);
    }
    rl.close();
});