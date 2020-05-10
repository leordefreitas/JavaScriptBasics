// user input
let readlineSync = require('readline-sync');

class ticTacToe {
// to spaces in the input
  constructor(empty) {
    if(empty.length === 0) {
      empty = ' ';
    }

    this.empty = empty;
    this.board = [
      [this.empty, this.empty, this.empty],
      [this.empty, this.empty, this.empty],
      [this.empty, this.empty, this.empty],
    ];
  }
  // getter for empty spaces on board
  get emptySpaces() {
    let spaces = 0;
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      for (let j = 0; j < row.length; j++) {
        const columnVal = row[j];

        if (columnVal === this.empty) spaces++;
      }
    }
    return spaces;
  }

  // randomly selects an ampty space on the board
  randomlySelectOpenBoardSpace() {
    const cuurentSpaces = [];
    // scan boarad to collect all empty spaces
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === this.empty) {
          cuurentSpaces.push({row: i, column: j})
        }
      }
    }
    return cuurentSpaces[Math.floor(Math.random() * cuurentSpaces.length)];
  }



  // print out board so it isn`s tlat
  printBoard() {
    console.log('\n Board Below\n')
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i]);
    }
    console.log();
  }

  // allows a user to marker at an specific positions on the border
  takeTurn(mark, row, column) {
    if (this.empty === this.board[row][column]) {
      this.board[row][column] = mark;
    }
  }
  whoIsWinner() {
    let winner = null;

    // check whether anyboy has won along the rows
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      //  check if 3 values ae presents in this row
      winner = are3ValuesPresent(row);
      if (winner !== null) return winner;
    }

    // check if there is a winner along DIAGONALS
    // SOUTHEAST
    const southEastDiagonal = [
      this.board[0][0],
      this.board[1][1],
      this.board[2][2],
    ];
    winner = are3ValuesPresent(southEastDiagonal);
    if (winner !== null) return winner;
    // NORTHEAST
    const northEastDiagonal = [
      this.board[0][2],
      this.board[1][1],
      this.board[2][0],
    ];
    winner = are3ValuesPresent(northEastDiagonal);
    if (winner !== null) return winner;

    // check the columns
    for (let i = 0; i < 3; i++) {
      const columnValue = [];
      for(let j = 0; j < 3; j++) {
        columnValue.push(this.board[j][i]);
      }
      winner = are3ValuesPresent(columnValue);
      if (winner !== null) return winner;
    }

    // if we rached here , that means no one won
    return winner;
  }
}

// this function determines whether 3X`s or 3O`s are present in a 3 
// elements array
const are3ValuesPresent = arr => {
  let xCount = 0;
  let oCount = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 'X') xCount++;
    else if (arr[j] === 'O') oCount++;
  }

  // check if anyboody has won
  if (xCount === 3) return 'X';
  else if (oCount === 3) return 'O';
  
  return null;
};




//  Wait for user's response.
let emptyChar = readlineSync.question(
  'What character should we use for an unused space: '
);

// create a new board, using the empty space the user provided
const game = new ticTacToe(emptyChar);
game.printBoard();

// no winner by default
let winner = null;

// keep track of when to take user`s turn
let isUserTurn = true;

// loop until there is winner OR no spaces are remanining
// loop while ther is no winner and there is space o board
while (winner === null && game.emptySpaces > 0) {
  let rowMove = -1;
  let colMove = -1;

  // check for use turn
  if (isUserTurn) {
    // have user take a turn
    let userMove = readlineSync
      .question('Where would you like to go (0 2): ')
      .split(' '); 
    rowMove = +userMove[0];
    colMove = +userMove[1];
    // game.takeTurn('X', rowMove, colMove);
  }
  // check computer turn
  else {
    // force computer to take turn
    let computerMove = game.randomlySelectOpenBoardSpace();
    console.log('Computer moving ...');
    rowMove = computerMove.row;
    colMove = computerMove.column;
    // game.takeTurn('O', computerMove.row, computerMove.column);
  }


  // takeTurn, print board, update user turn boolean, and who is win
  // here is inside loop 
  game.takeTurn(isUserTurn ? 'X' : 'O', rowMove, colMove);
  game.printBoard();
  isUserTurn = !isUserTurn;
  winner = game.whoIsWinner();
}

// if somebody won, congralute
if (winner !== null) console.log(`Congratulation ${winner}!! YOU WOM`);
else console.log('You both suck. Nobody won.');
