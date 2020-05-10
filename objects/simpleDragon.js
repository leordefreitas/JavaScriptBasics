// objects allow us to create very discriptive and specific pieces of data
// the word in get the value is call KEY
const dragon = {name: 'felix', size: 'really big', age: 1000};

// prints objects
console.log(dragon);

// acess specific properties
console.log(`This is how big ${dragon.name} is ${dragon.size}`);

// reset properties
dragon.age += 1;
console.log(`This is how old the ${dragon.name} is ${dragon.age}`);

// create new properties
dragon.favoriteIceCreamFlavor = 'vanilla';
console.log(dragon['favoriteIceCreamFlavor']); //has to put '' to work inside

// we can do that
const differentDragon = {'name': 'jeff', 'age': 15}; 
// console.log(differentDragon);
differentDragon['favorite restaurant'] = 'mcdonald\`';
console.log(differentDragon);