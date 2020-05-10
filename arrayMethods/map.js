// map performs a function an each element in an array, but then
// returns the result of calling the function an each element IN A
// NEW ARRAY.
let animals = ['fish', 'pony', 'whale'];
let excitedAnimals = animals.map(a => {
  return a.toUpperCase() + '!!';
});
console.log(animals, excitedAnimals);