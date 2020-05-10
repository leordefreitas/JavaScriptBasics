// include code to get user input
let readlineSync = require('readline-sync');

// make world for user
const worldWidth = 3;
const world = ' '.repeat(worldWidth).split('');
console.log('Empty world');

// place user
let position = Math.floor(worldWidth / 2); //is use to give the midle of the array
world[position] = 'P';
console.log('Player joined');
console.log(world);

// assume the playes want continue playing
let userContinue = true;

while (userContinue) {
  // ask the user for a direction
  let nextDirection = readlineSync.question(
    '\n\nWhat direction do you like to go: '
    );
    
  // nullify player`s current position
  world[position] = ' '
  
  // move the player to the rigth if they said rigth
  if (nextDirection === 'right') {
    // don`t leave they hit the bound
    if (position < (worldWidth - 1)) {
      position += 1;
    }
  }
  // left if they said left
  else if (nextDirection === 'left' && position > 0) {
    // don`t allow player to go out of bounds
    position -= 1;
    }
  
      
  // put player back in the world
  world[position] = 'P';
  console.log(world);

  // calculate result from input
  let userInput = readlineSync.question(
    'Want to continue: '
  );
    if (userInput !== 'yes') {
      userContinue = false;
    }
}
console.log('Thank you to play my game!');
