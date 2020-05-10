/* 
the user will give us a number like 3, and we`ll draw something like this
3.
xxx
x x
xxx
4.
xxxx
x  x
x  x
xxxx
*/

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('I can draw boxes. Give me a number NOW: ', (answer) => {
  // convert the input to a number
  let number = +answer;

  // know if is 1 they prin that
  if (number === 1) {
    console.log('x');
  }
  else {
  // drow top
  console.log('x'.repeat(number))
  
  // midle
  const midleBoxSpaces = number - 2;
  let finalMidleBox = '';

  for (let i = 0; i < midleBoxSpaces; i++) {
    finalMidleBox = 'x' + ' '.repeat(midleBoxSpaces) + 'x';
    console.log(finalMidleBox);
  }

  // drow bot
  console.log('x'.repeat(number))
}
  rl.close();
});