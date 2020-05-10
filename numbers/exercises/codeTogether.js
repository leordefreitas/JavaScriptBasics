// this kingdom has 2 peasants
const peasant1 = 'Jeff'.toUpperCase();
const peasant2 = 'Ralph'.toUpperCase();


/* suppose a kingdom has a problem with dragons
they need somebody to call out when dragons
are going to attack the castle.
*/

console.log(`\n${peasant1}: SIRE!!Dragons are attacking the castle. What should we do?`);

//somebody else says how many dragons there are
const dragonCount = 10;
const bazukasFor1 = 2;
console.log(`\n${peasant2}: I see ${dragonCount} dragons aproaching... what should we do?`);

// the peasants like to figth dragons with bazukas
//but bazukas don`t come cheap. bazukas cost a certain
//amount per bazukas, and each dragon requires
//2 basukas to taken down.
const gold = 5000;
const costPerBazuka = 400;
console.log(`\n${peasant1}: The kingdom has ${gold}g.`);
console.log(`\n${peasant2}: Bazukas cost ${costPerBazuka}g today.`);

//how can we figure out how many bazukas we need to take out all those dragons
//10 dragons
//5000 gold
//bazukas cost=400gold
//5000g/400g per bazukas
const bazukasPerDragons = gold / costPerBazuka;
console.log(`\n${peasant2}: We can afford ${bazukasPerDragons}`);

const slayCount = bazukasPerDragons / bazukasFor1
console.log(`\n${peasant1}: Whith that, we can slay ${slayCount}`)

//king walks in and does some quick math
const king = 'Richard'.toLowerCase();
console.log(`\n${king} walks in to perform agile mathematics. ***`);
const dragonsRemaning = dragonCount - slayCount;
console.log(`\n${king}: Dear me, theare will be ${dragonsRemaning} BEATS leftover. We\`re doomed.`);

console.log();

