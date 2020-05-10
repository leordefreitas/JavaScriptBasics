let readlineSync = require('readline-sync');
// calculate the nth fibonacci number
// math.floor() is just to a float number not be inputed by the user
const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  // defaut behavior
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// ask the user
let whichFib = +readlineSync.question('which fibonacci do you request: ');

// invalid fibonacci number
if (
  isNaN(whichFib) || 
  typeof(whichFib) !== 'number' || 
  whichFib < 0 || 
  Math.floor(whichFib) !== whichFib
) {
  console.log('I am not doing this!!');
  return;
}
// fibonacci number
else {
  console.log(`fibonacci number ${whichFib}: ${fibonacci(whichFib)}`);
}
