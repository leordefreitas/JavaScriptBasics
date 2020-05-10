let readlineSync = require('readline-sync');
const Wall  = require('./Wall.js');
const Dragon = require('./Dragon.js');

// ask user walls
let heightUser = +readlineSync.question('How height is the wall: ');
let strongAgainstUser = readlineSync.question('The wall is strong against: ');
let weakAgainstUser = readlineSync.question('The wall is weak against: ');

// create wall
const wall = new Wall(heightUser, strongAgainstUser, weakAgainstUser);
wall.showWall();

// ask the user for dragon
let loopInuptDragon = true;
let dragons = [];

while (loopInuptDragon) {
  let addDragonAttack = readlineSync.question('Do you want add a dragon for the attack, If yes what is the type: ');
  if (addDragonAttack === 'no') break;
  let addName = readlineSync.question('What is the name: ');
  let addDamage = +readlineSync.question('What is the damage: ');

  // create dragons
  // create list of dragons by the type
  if (addDragonAttack === 'fire') {
    const fireDragon = new Dragon.FireDragon(addName, addDamage, addDragonAttack);
    dragons.push(fireDragon);
  }
  else if (addDragonAttack === 'ice') {
    const iceDragon = new Dragon.IceDragon(addName, addDamage, addDragonAttack);
    dragons.push(iceDragon);
  }
  else if (addDragonAttack === 'eletric') {
    const eletricDragon = new Dragon.EletricDragon(addName, addDamage, addDragonAttack);
    dragons.push(eletricDragon);
  }
  else {
    const differentDragon = new Dragon.Regular(addName, addDamage, addDragonAttack);
    dragons.push(differentDragon);
  }
  console.log(dragons);
}

// attacks
let attackTurnTimes = +readlineSync.question('How many attacks: ');

for(let i = 0; i < attackTurnTimes; i++) {
  for(let j = 0; j < dragons.length; j++) {
    dragons[j].attackWall(wall);
  }
  if (true === wall.hasFallen) break;
  wall.showWall();
}
if (wall.currrentHeight <= 0) console.log('THE DRAGONS WON!')
else console.log('THE WALL HAS WON!!')








// ask the user to say how many turns of attacks each dragon is allowed to go
// through, onde obtained, cycle through the dragons(back to back) and allow
// each dragon to have a turn. so if user spcefied 2 dragons, a firwe and
// an ice, and they say they want 3 attacks, then the order should look like:
// fire ice fire ice fire ice, the attacks should stop if the wall falls, so
// i`d like you to go back to the wall class and write a getter to determine if
// the wall has fallen, at the end of the attacks, if the wall is still standing
// have some output like 'the walls wins', and them if the wall has fallen,
// have output saying 'dragons win'