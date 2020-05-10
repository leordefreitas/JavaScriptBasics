// write a forEach that, given an array of intergers (whole numbers), prints
// out the cube of each integer in the array
/* 
[3, 6, 8].forEach(?)
----------------------
27
216
512
*/
// const arrayOfIntergers = [3, 6, 8];
// arrayOfIntergers.forEach(element => {
//   console.log(element ** 3);
// })

// for the next exercise, try rewriting a function that, given an array of
// numbers, sums up each number in the array
/* 
[3, 6, -18, 24.3].forEach(?)
--------------------
3+6+(-18)+24.3 = ?
*/
const numbersInArray = [3, 6, -18, 24.3];
let stringInFinal = `[${numbersInArray}] = `;
let sum = 0;

numbersInArray.forEach(numbers => {
  if (numbersInArray[numbersInArray.length - 1] === numbers) {
    sum += numbers;
    stringInFinal += `${numbers} = ${sum}`;
  }
  else {
    sum += numbers;
    stringInFinal += `${numbers} + `
  }
})
console.log(stringInFinal);