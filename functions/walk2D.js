// include code to get user input
let readlineSync = require('readline-sync');

// functions
// function print out world
const printOutWorld = world => {
  for (let i = 0; i < world.length; i++) {
    console.log(world[i]);
  }
}
// function to put the player on the world
const writeToWorld = (world, row, column, char) => {
  world[row][column] = char;
}


// make world for user
// size of the world, they can be changed
const worldLength = 5;
const worldWidth = 5;
// const world = ' '.repeat(worldWidth).split('');
const world = [];
for (let i = 0; i < worldLength; i++) {
  world.push(' '.repeat(worldWidth).split(''));
}
console.log('Empty world');

// place user
let rowPosition = Math.floor(worldLength / 2);
let columnPosition = Math.floor(worldWidth / 2);
writeToWorld(world, rowPosition, columnPosition, 'P');
console.log('Player joined');
printOutWorld(world);

while (true) {
  // ask the user for a direction
  let userInput = readlineSync.question(
    '\n\nWhat direction do you like to go: '
    );
    
  // nullify player`s current position
  writeToWorld(world, rowPosition, columnPosition, ' ');
  
  // move the player to the rigth if they said rigth
  if (userInput === 'right') {
    // don`t leave they hit the bound
    if (columnPosition < (worldWidth - 1)) {
      columnPosition += 1;
    }
  }
  // left if they said left
  else if (userInput === 'left' && columnPosition > 0) {
    // don`t allow player to go out of bounds
    columnPosition -= 1;
  }
  // up
  else if (userInput === 'up' && rowPosition > 0) {
    rowPosition -= 1;
  }
  // down
  else if (userInput === 'down') {
    if (rowPosition < (worldLength - 1)) {
      rowPosition += 1;
    }
  }
  // wants to quit
  else if (userInput === 'quit') {
    break;
  }
  // put player back in the world
  writeToWorld(world, rowPosition, columnPosition, 'P');
  printOutWorld(world);
}
console.log('Thank you to play my game!');
