// we are going to write out a program that will print out
// numbers in this way
/* 
0, 1, 2, 3, 4, 5, ...
*/
// but it should stop getting new numbers once
// will exceed 100 characters
let output = '';
let i = 0;
const outputCharLimit = 100;
while (output.length < outputCharLimit) {
    output += i + ', ';
    ++i;
}
console.log(output);
console.log(`Length: ${output.length}`)