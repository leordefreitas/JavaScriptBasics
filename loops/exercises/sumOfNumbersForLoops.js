const max = 20;
let sum = 0;
let curr = 0
for (; curr <= max; curr++) {
  console.log(`${curr} + ${sum} = ${curr + sum}`);
  sum += curr
}
console.log('done')