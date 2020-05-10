// write 2 programs. given an array of only booleans, your program should
// rpint out the result of ANDing all the booleans together, and another
// result fo ORing all the booleans together

// OPERATION WITH THE || AND &&
const bools = [true, false, true];
let orChain = bools[0];
let andChain = bools[0];
for (let i = 1; i < bools.length; i++) {
  orChain = orChain || bools[i];
  andChain = andChain && bools[i];
} 
console.log(`${bools.join(' || ')} = ${orChain}`);
console.log(`${bools.join(' && ')} = ${andChain}`);