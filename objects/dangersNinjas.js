/* 
there is a list of dangerous ninjas, and it`s important to us that we know who
is how dangerous. therefore, what`s we`ll do is we`ll crate an array to know,
relatively, how dangerous a certain ninja is.
*/

// ['jayla', 'bobby', 'zach']

// to arrow function we can put a parentheses to not has to write return
const createNinja = (name, weapon, dangerLevel) => ({
    name,
    weapon,
    dangerLevel,
});

const ninjaArray = [
  createNinja('jayla', 'katana', 9001),
  createNinja('bobby', 'stick', 100),
  createNinja('zeke', 'candy to trowing', -5),
];

// THE CLASS BEFORE
// // if we want to print out the ninjas in the most dangerous order
// console.log(`most to least dangeorous:`, ninjaArray);
// // what if wewanr to print out from leasr dangerous to most dangerous?
// console.log(`least to most dangeorous:`, ninjaArray.reverse());

// // list the names of the least to the most
// const mostToLeastDangerousNames = [];
// for (let i = 0; i < ninjaArray.length; i++) {
//   mostToLeastDangerousNames.push(ninjaArray[i].name);
// }
// console.log(
//   `Name in order to least dangerous to the most dangerous:`, mostToLeastDangerousNames.join(', '),
//   );

// // list the names of the most to the least
// const leastToMostDangerousNames = [];
// for (let j = ninjaArray.length - 1; j >= 0; j--) {
//   leastToMostDangerousNames.push(ninjaArray[j].name);
// };
// console.log(
//   `I did the list of the most powerful to the least:`, leastToMostDangerousNames.join(', ')
//   );

// // what if i want the second most dangerous ninja`s weapon?
// console.log(ninjaArray[1].weapon);

// suppose we want to find a ninja by a specific name, and we want to know
// what is their danger level?
let foundNinja = null;
const specialName = 'zeke';
// for (let i = 0; i < ninjaArray.length; i++) {
//   if (ninjaArray[i].name === specialName) {
//     foundNinja = ninjaArray[i]
//     break;
//   }
// }

// a function call .find can be used, is the same that the loop above
foundNinja = ninjaArray.find(ninja => ninja.name === specialName);
console.log(
  `The found ninja is ${foundNinja.name} and your danger level is ${foundNinja.dangerLevel}`
  );

// create the objects by a key to speed the results
const ninjaByName = {
  jayla: createNinja('jayla', 'katana', 9001),
  booby: createNinja('bobby', 'stick', 100),
  zeke: createNinja('zeke', 'candy to trowing', -5),
};
// here is calling just the valu of the special name so they are not an object
console.log(ninjaByName[specialName].weapon);

