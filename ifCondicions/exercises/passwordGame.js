/* 
1. the user is going to give you a string, and each user stats out with 
a points. if the string the user gave us stars with a ?, then we`ll do some
 more tests to see how many poits they`ll win (based on other things in their 
string). however, if the user`s input DOES NOT star with a ?, the they lose instantly
*/
// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for a string
rl.question("Please give me a string: ", (answer) => {
    // start with the 0 points
    let points = 0;

    // check the first character
    if (answer[0] === '?') {
        /* 
        2. so, suppose the user hasn`t last the game yet. if that`s the case,
        we`re going to test the second character they gave you.if the second 
        character is an I, give the user 2 points, otherwise, if the second character is a %, give the user 3 points, otherwise, the just get`s 1 
        point
        */
        // check the second character
        if(answer[1] === '!') {
            points += 2;
        }
        else if(answer[1] === '%') {
            points += 3;
        /* 
        3. now, if the user gave a % in part 2 (above), award the user o point 
        for each character in their entire string
        */
            points += answer.length;
        }
        else {
            points += 1;
        }
    }
    /* 
    4. once finished, even if the user get no points, print out how many points 
    they have earned when the game is over
    */
    console.log(`GAME OVER. Points: ${points}`);
    rl.close();
});