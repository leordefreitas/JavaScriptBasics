/* 
WRITE A PROGRAM THAT DOWS THE FOLLOWING

world1 = [
  [' ', ' '],
  [' '],
  [' ', ' ', ' '],
]
world2 = [
  [' ', ' ', ' ', ' '],
  [' ', ' '],
  [' ', ' ', ' '],
]
*/

// worlds
const worldA = [
  [' ', ' '],
  [' '],
  [' ', ' ', ' '],
];
const worldB = [
  [' ', ' ', ' ', ' '],
  [' ', ' '],
  [' ', ' ', ' '],
];

// function
const glueWorlds = (world1, world2) => {
  // copy to not modify the principal
  const world1Copy = world1.slice();
  const world2Copy = world2.slice();
  
  // glue one in another
  for (let i = 0; i < world2.length; i++) {
    world1Copy.push(world2Copy[i]);
  }
  return world1Copy;
};
// executing
console.log(glueWorlds(worldA, worldB));
