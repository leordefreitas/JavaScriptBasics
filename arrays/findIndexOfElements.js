// let`s write a program that finds the index of an element if it`s in the
// array. if the lements IS NOT int he array, let`s say that index is -1
// ['a', 'b', 'c', 'd', 'e'] looking for 'a' give us 0
// looking for 'd' gives us 3
// looking for 'f' gives us -1
// assume you only have to find the first accurrence of the element

let fish = ['swordfish', 'whale', 'octopus', 'shark', 'squid', 'starfich'];

// this is just one thing take of the internet to show in cmd input and output
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me the name of the fish you seek: ', (answer) => {
  // inform user that we`re TRYING , REALLY HARD
  console.log(`BEEP BOOP ...SEARCHING FOR ${answer.toUpperCase()}...BOOP BOP`);
  
  // search for lowercase version of user`s fish
  answer = answer.toLowerCase();
  let matchIndex = -1;

  for (let i =0; i < fish.length; i++) {
    // compare current fish to user`s fish
    if (fish[i] === answer) {
      matchIndex = i;
      break;
    }
  }
  // inform the user about your findings
  // if din`t find a fish, apologize to user
  if (matchIndex === -1) {
    console.log(`Apologize we couldn\`t find your fish ${answer}`);
  }
  else {
    console.log(`Found your fish at index: ${matchIndex}`);
  } 

  // oh bay the way, we could have definitely done this using a preimplemented
  // method called '.indexOf(answer)'
  console.log(fish, answer, fish.indexOf(answer));

  rl.close();
});

