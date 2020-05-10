/* 
ask the user to provide information describing their player, and also info
describing an enemy they have to fight against. then we`ll allow each of
these player and the enemy take turns attacking each other untill one of then
is defeated
*/
// include code to get input
var readlineSync = require('readline-sync');

// get user input about their character
const playerName = readlineSync.question('Player name: ');
const playerHp = +readlineSync.question('Player HP: ');
const playerDamage = +readlineSync.question('Player damage (per attack): ');
console.log('Player:', [playerName, playerHp, playerDamage]);

// moster
const enemyName = readlineSync.question('Enemy name: ');
const enemyHp = +readlineSync.question('Enemy HP: ');
const enemyDamage = +readlineSync.question('Enemy damage (per attack): ');
console.log('Enemy:', [enemyName, enemyHp, enemyDamage]);

// this object takes character info and gives back a character object
// and store, by the function
const makeCharacter = (name, hp, damage) => ({
    damage,
    hp,
    name,
});

const player = makeCharacter(playerName, playerHp, playerDamage);
const enemy = makeCharacter(enemyName, enemyHp, enemyDamage);
console.log(player, enemy);

// this function will print out the current stats o the characters
const doCharacterReport = () => {
  console.log(
    `${player.name}: ${player.hp}hp || ${enemy.name}: ${enemy.hp}hp\n`
  );
};

// this function forces character A to do damege to character B
const aDamage = (charA, charB) => {
  console.log(
    `${charA.name} hits ${charB.name} for ${charA.damage} damage.`
  );
  charB.hp -= charA.damage;
}
// player always gets to go first
let  nextAttackingCharacter = enemy;

doCharacterReport();
// loop until one of the characters is defeated
while (player.hp > 0 && enemy.hp > 0) {
  //damage phase
  // player time
  if (nextAttackingCharacter === player) {
    aDamage(player, enemy);
    nextAttackingCharacter = enemy;
  }
  // enemy time
  else {
    aDamage(enemy, player);
    nextAttackingCharacter = player;
  }
  
  // reporting phase
  console.log('\n---------------------\n');
  doCharacterReport();
  // break;
}
if (player.hp <= 0) {
  console.log(`${enemy.name} is the WINNER!!`);
}
else {
  console.log(`${player.name} is the WINNER!!`);
}