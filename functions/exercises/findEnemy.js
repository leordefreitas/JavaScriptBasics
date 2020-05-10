// write a function that prints out the location of the enemy in the world
/* 
[
  [' ', ' '],
  [' ', 'X'],
] => 1, 1
[
 [' ', 'X'],
 [' ', ' '],
] => 0, 1
*/

// test worlds
const world1 = [
  [' ', ' '],
  [' ', 'X'],
];
const world2 = [
  [' ', ' '],
  [' ', ' ', ' ', 'X', ' '],
];

// returns the enemy position in a world
const getEnemyPositionInWorld = world => {
  let enemyPosition = null;
  let count = 0;

  // iterate over each row
  for (let row = 0; row < world.length; row++) {
    // iterate over each column
    for(let column = 0; column < world[row].length; column++) {
      ++count;
      // if enemy found, store the position
      if (world[row][column] === 'X') {
        enemyPosition = [row, column];
        console.log(`Number of cheks: ${count}`);
        return enemyPosition;
      }
    }
  }
  return 'THE ENEMY WAS NOT FOUND!'
};

console.log(getEnemyPositionInWorld(world2));