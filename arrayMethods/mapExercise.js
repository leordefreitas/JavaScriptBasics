// 1. give an array of strings, outpu a new array of the strings 
// reverse
const stringsToBeReverse = ['ab', 'abcdefghi'];
let stringsReversed = stringsToBeReverse.map(string => {
  return string.split('').reverse().join('');
});
console.log(stringsReversed);

// 2. give an array of strings, outoput a new array that looks like 
// the following
const arrayOfStrings = ['cat', 'dogfish'];
let newArrayOfStrings = arrayOfStrings.map((string, index) => {
  return `${index}-${string}-${string.length ** 2}`;
});
console.log(newArrayOfStrings);

// 3. the value of the array is the index of theat and print out
const someArray = [4, 0, 2, 1, 3, 3];
let newArray = someArray.map((number, index, array) => {
  return array[number];
})
console.log(newArray);