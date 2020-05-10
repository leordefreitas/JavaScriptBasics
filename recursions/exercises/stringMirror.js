/* 
given a string like mirror, write a function that returns the following 
output:

mirror => rorrim|mirror
*/
/* 
MY TRY IN HERE
let newWord = '';
let count = 0;
const mirrorWordFunction = string => {
  count++;
  if (count < string.length) {
    return newWord += mirrorWordFunction(string[string.length - 1]);
  }

  return newWord += ` | ${string}`;
};
console.log(mirrorWordFunction('leo')); */

// regular solutions
const mirrorWithRegular = string => {
  return string.split('').reverse().join('') + '|' + string;
}
console.log(mirrorWithRegular('mirror'));

// iterations solutions
const mirrorWithIterative = string => {
  let result = '|' + string;
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
};
console.log(mirrorWithIterative('cat'));

// recursive solutions
const mirrorWithRecursion = string => {
  if (string === '') return '|';
  const lastChar = string[string.length - 1];

  return lastChar + mirrorWithRecursion(string.slice(0, -1)) + lastChar;
};
console.log(mirrorWithRecursion('mirror'));