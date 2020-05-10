// http://nodejs.org/api/readLine.html is not workink so i write by myself
// this is just one thing take of the internet to show in cmd input and output
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your favorite color? ', (answer) => {
    // chek if the favorite color of the user is blue
    const isFavoriteColorBlue = answer.toUpperCase() === 'BLUE'
    console.log(`Your favorite color is blue: ${isFavoriteColorBlue}`);
    rl.close();
});

/* 
PROMPT USER
what`s your favorite color? Blue

what code validates for toUpperCas()
isFavoriteColorBlue = true

COMPUTER OUTPUT
Your favorite color is blue: true
*/