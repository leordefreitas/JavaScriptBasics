/* ZACH EXAMPLE
const makeFlamingoSound = () => console.log('kakakka');

const flamingo = {
  color: 'pink',
  makeSound: makeFlamingoSound,
};
console.log(flamingo);
flamingo.makeSound(); */

// write a program that describes some type of magical beast, and your bear
// shoul have 5 properties, 1 of each of the following type:
/* 
number
string
boolean
array
function
*/
const bearSoundFunction = (species) => {
  console.log(species, 'arraraararararrar');
};
const color = 'black'; //we can do is call just the name in the object

// put in alphabetily order is good, because the order doens`t matter
const magicalBear = {
  age: 30,
  bearIsBad: true,
  bearSound: bearSoundFunction,
  color,
  name: 'ursinhos carinhosos',
  thingsBearKill: ['fish', 'person', 'dragon'],
};
console.log(magicalBear);
console.log(magicalBear['name']); // don`t forget to put ''
magicalBear.bearSound(magicalBear.name); // i can call the function this way