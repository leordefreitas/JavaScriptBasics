// include code to get user input
let readlineSync = require('readline-sync');
// assume the playes want continue playing
let userContinue = true;

while (userContinue) {
  let userInput = readlineSync.question(
    'Want to continue: '
  );
  // calculate result from input
  if (userInput !== 'yes') {
    userContinue = false;
  }
}
