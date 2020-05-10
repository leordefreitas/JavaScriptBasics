let readlineSync = require('readline-sync');
let userName = readlineSync.question('Enter player name: ');
console.log(`Welcome ${userName}!`);

// make board for player
const board = [];
const rowCount = 3;
const columnCount = 3;
// add a rows
for(let i = 0; i < rowCount; i++) {
  board.push([]);
  // add a column
  for (let j = 0; j < columnCount; j++) {
    board[i].push(' ');
  }
  // print out in the first time
  console.log(board[i]);
}

// ask user to guess a certain number of times
const maxGuesses = 3;
let userGuessesRemaning = maxGuesses;

// place ship randomly, is just one thing take in the internet to make random numbers
const shipRow = Math.floor(Math.random() * rowCount) + 0;
const shipColumn = Math.floor(Math.random() * columnCount) + 0;

// loop until game is over
while (userGuessesRemaning > 0) {
  console.log(`Guess remaining: ${userGuessesRemaning}`);
  
  // ask user for their next move
  let nextMove = readlineSync.question(
    'Enter your next move: (1 2 means row1, column 2)'
    ).split(' ');
    
  // extract guesses to something we can use for array
  let rowGuess = +nextMove[0];
  let columnGuess = +nextMove[1];
  
  // check if the user has hit ship
  const hitShip = rowGuess === shipRow && columnGuess === shipColumn;
  if(hitShip) {
    board[rowGuess][columnGuess] = 'S';
    console.log('YOU HIT THE SHIP :)');
  }
  // tell user they missed
  else {
    // mark the users guess on the board
    board[rowGuess][columnGuess] = 'X';
    console.log('YIKES. THAT IS A BIG MISS');
  }
  
  // print out board row by row
  for (let p = 0; p < rowCount; p++) {
    console.log(board[p]);
  }

  // finish game rigth away if the user hit the ship
  if (hitShip) {
    break;
  }
  
  // turn is over, decrement guess
  userGuessesRemaning--;
}

// check if user has any guesses remaining to see if they have won
if (userGuessesRemaning > 0) {
  console.log('YOU WON');
}
else {
  console.log('YOU LOSE');

  // mark the ship to the user see when he lose
  board[shipRow][shipColumn] = 'S';
  for(let i = 0; i < rowCount; i++) {
    board.push([]);
    // add a column
    for (let j = 0; j < columnCount; j++) {
      board[i].push('X');
    }
  }
  // print out board row by row
  for (let p = 0; p < rowCount; p++) {
    console.log(board[p]);
  }
}