const animals = ['zebra', 'elephant', 'lion', 'penguin', 'whale'];

// 1. use slice to get a full copy(all elements) of the animals array

// 2. get a copy of the animals including every element but the last 2

// 3. using the array from part 2, add any animal into the end,
// and then store of the resulting array into ANOTHER array
// here we`ll define the middle of an array as all elements for the 
// first and last [0, 1, 2, 3] => [1, 2]

// 1
const copyAnimals1 = animals.slice();
console.log(`The animals\`s array is: [${animals}], the copy is [${copyAnimals1}]`);
console.log(`These are different: ${animals !== copyAnimals1}`);

// 2
const copyAnimals2 = animals.slice(0, -2); //this -2 specfied we don`t want the last 2 numbers
console.log(`The animals\`s array is: [${animals}], the copy is [${copyAnimals2}]`);

// 3
// ADD
copyAnimals2.push('cow', 'fish', 'tiger');
// COPY THE ARRAY
copyAnimals3 = copyAnimals2.slice(1, -1);
console.log(`The animals\`s array is: [${copyAnimals2}], the copy is [${copyAnimals3}]`);
