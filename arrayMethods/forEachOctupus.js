let readlineSync = require('readline-sync');
/* 
let`s say we want a write a program where we ask the user to crate a bunch
of octopuses. that`s it rady set go.
*/
class Octupus {
  constructor(name, lifeDepth, isHealthy = true) {
    this.name = name;
    this.lifeDepth = lifeDepth;
    this.isHealthy = isHealthy;
  }
  get location () {
    return `${this.lifeDepth} ft under the sea`;
  }
}

// ask the user
let createMoreFriends = true;
let octupusInfo = [];
while (createMoreFriends) {
  // description of octupus
  let name = readlineSync.question('Name: ');
  let lifeDepth = Number(readlineSync.question('Life depth: '));
  let isHealthy = Boolean(readlineSync.question('Heathy (true or false): '));
  octupusInfo.push([name, lifeDepth, isHealthy]);
  
  // user response
  createMoreFriends = readlineSync.question(
    'Would you like to create another octupus: '
  ) === 'yes';
  console.log();
}

// make anew collection of octupus
const octupusFriends = [];

octupusInfo.forEach(arr => {
  const currOctupus = arr;
  octupusFriends.push(new Octupus(arr[0], arr[1], arr[2]))
});

console.log(octupusFriends);
console.log();
// print out the location of each octupus
// for (let i = 0; i < octupusFriends.length; i++) {
//   console.log(`${octupusFriends[i].name} lives ${octupusFriends[i].location}`);
// }
octupusFriends.forEach(octupusMadeByTheUser => {
  console.log(
    `${octupusMadeByTheUser.name} lives ${octupusMadeByTheUser.location}`
  )
});