/* 
suppose we have an object that maps a sea crature's name to how rare it is 
(on a scale 1 to 10, 1 being very rare)
*/
const nameToRareness = {
  'whale': 9,
  'jellyfish': 5,
  'starfish': 6,
  'minnow': 2,
};

// if we want see how rare a whale is, we can just lookup the whale by name
// and get it`s rarity value
const creature ='squid';
// we can use IN just like the python
if (creature in nameToRareness) {
  console.log(`Here\`s how rare a ${creature} is: ${nameToRareness[creature]}`);
}
else {
  console.log(`We do not have any information about the ${creature}. Sorry`);
}

// suppose we want to figure out all the creatures that we have rarity info
// about. we can definitely do this
console.log(Object.keys(nameToRareness));
// to show the values of the ojectsconsole.log(Object.keys(nameToRareness));
console.log(Object.values(nameToRareness));

// suppose minnows became endangered, and their rarity goes up to a 10, we can
// overwrite the value being stored at a specific key
console.log(nameToRareness['minnow']);
nameToRareness['minnow'] = 10;
console.log(nameToRareness['minnow']);

// you can also delete a key value pair
delete nameToRareness['starfish'];
console.log(nameToRareness);