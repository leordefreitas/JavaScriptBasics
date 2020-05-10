// write a program that calculate the factorial for n, whatever n is
// in the following manner:
// n! = n! * (n-1)!... * 2 * 1 = (result)
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Hi! I can calculate factorials. Give me a whole positive number: ', (answer) => {
  let number = +answer;
  let printFinal = `${number}! =`;
  let factorial = 1;

  for (let i = number; i > 0; i -= 1) {
    factorial *= i;

    // just to the last string to bring the final of the expression
    if (i === 1) {
      printFinal += ` ${i} = ${factorial}`; 
    }
    else {
      printFinal += ` ${i} *`;
    }
  }
  console.log(printFinal);
    rl.close();
});