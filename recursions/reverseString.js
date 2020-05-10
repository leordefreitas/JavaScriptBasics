// iteratively reverse a string
let someString = 'some string goes here?';
let reverse = '';
for (let i = someString.length - 1; i >= 0; i--) {
  reverse += someString[i];
}
console.log(`${someString}\nreversed: ${reverse}`);

// so great, we know iteratoiion works... what about recursion?
let reverseRecursion = '';
const reverseStringLikeLoop = (stringToReverse, nextIndex) => {
  if (nextIndex < 0) return '';
  return stringToReverse[nextIndex] +
    reverseStringLikeLoop(stringToReverse, nextIndex - 1)
}
console.log(reverseStringLikeLoop('cat', 'cat'.length - 1));

// ANOTHER WAY TO REVERS A STRING
const reverseStringByChopping = string => {
  const lastChar = string[string.length - 1];
  if (string.length === 1) return lastChar;

  return lastChar + reverseStringByChopping(string.slice(0, -1));
}
console.log(reverseStringByChopping('dog'));