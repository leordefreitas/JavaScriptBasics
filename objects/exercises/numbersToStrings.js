/* 
write a program wich starts with an empy object. this object is going to map
numbers to their string counterpart. i don`t mean 1 => 'one', I mean 1 => '1'

have your program take in input from the user or a low number and a high number,
and your object should store every whole number between [low, high]
{
  6: '6'
  7: '7'
  8: '8'
}
*/

// include code to get user input
var readlineSync = require('readline-sync');

// get user input, use + to trasnform the result in number
const low = +readlineSync.question('Low: ');
const high = +readlineSync.question('High: ');

// store data here
const numbersToString = {};

// loop over each whole number in range
for (let i = low; i <= high; i++) {
  // add  an object to the number in the looping
  let objectToNumber = {};
  objectToNumber['isEven'] = i % 2 === 0;
  objectToNumber['remainderWhen10'] = i % 10;
  objectToNumber['squareOfNumber'] = i ** 2;
  
  numbersToString[i] = objectToNumber;
}

console.log(numbersToString);

// as a follow up problem, do the following
/* 
iterate over each key in the object  you just creates, and reassign the value
for that key to be something staring the following  information:
- is the number version even?
- remainder when dividing the number by 10
- square of the number

{
  6 => even = true, remainder of 6 / 10 = 6, square = 36
}
*/