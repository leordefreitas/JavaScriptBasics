/* 
suppose we have a string that the user has given us (we can store this in a
constant for now, no need for input). iterate the string and grab every 3rd
character, store each of these characters in an output string using string
concatenation. stop once you`ve collected 15 characthers.
*/

// user input FAKE
const input = 'elephant giraffe pony seabass anaconda china lettuce hamburger french';
// collect characters with this
let output = '';
// use this to mark we should grab characters from in the string
let charIndex = 0;

// loop until we have 15 characters collected
while (output.length <= 15) {
  // add an current character
  output += input[charIndex];
  // print out to the user see
  console.log(`${charIndex}: ${output}`);
  // move character index up by 3
  charIndex += 3;
}
console.log(`Your word find is: ${output}`);
console.log('done');