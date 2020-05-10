// 1. crate an array with the numbers 0 to 8 (inclusive) inside of it. only
// the whole numbers
const arr1 = [];

for (let i = 0; i < 9; i++) {
  arr1.unshift(i);
}
arr1.unshift('finished');
console.log(`Array 1: [${arr1}]`);

// 2. add elements in reverse order
const arr2 = [];

for (let i = 0; i < 9; i++) {
  arr2.push(i);
}
arr2.push('finished');
console.log(`Array 2: [${arr2}]`);

// 3. remove all of the elements frow array 1 using the remove from
// FRONT method, but also pront out the array at each loop iterate
// for (let i = 0; i < 9; i++) {
//   const removedValue1 = arr1.shift();
//   console.log(`Removed value: ${removedValue1}, the new array is: [${arr1}]`);

// DOING WITH WHILE
while (arr1.length > 0) {
  const removedValue1 = arr1.shift();
  console.log(`Removed value: ${removedValue1}, the new array is: [${arr1}]`);
}


// 4. remove all of the elements frow array 2 using the remove from
// BACK method, but also pront out the array at each loop iterate
// for (let i = 0; i < 9; i++) {
//   const removedValue2 = arr2.pop();
//   console.log(`Removed value: ${removedValue2}, the new array is: [${arr2}]`);
// }
while (arr2.length > 0) {
  removedValue2 = arr2.pop();
  console.log(`Removed value: ${removedValue2}, the new array is: [${arr2}]`);
}