
// LOOPING IN INPUTS
var readlineSync = require('readline-sync');
 
// ask user for input 3 times
for (let i = 0; i < 3; i++) {
  //  Wait for user's response.
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
} 
