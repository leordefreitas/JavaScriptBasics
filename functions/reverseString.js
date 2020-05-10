// write a function that, when given a string, will return a copy of 
// a reverse string
function reverseString (string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('abcd'));
console.log(reverseString('123456789'));
console.log(reverseString('this is a FANTASTIC function'));