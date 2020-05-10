// write a program that sums up all numbers between 0 and whatever number
// grater than 0 you want. sometimes you`ll see this problem being read as
//  "sum all the numbers between 0 and n, where n is some arbitrary whole number
// grater 0". make this an inclusive sim, meaning includes 0 and the upper bound
// number.
// this will be the current number we have to add
let curr = 0;
// upper bound
const max = 20;
// sum
let sum = curr;
// loop until we pass the max
while (curr <= max) {
  // show to the user
  console.log(`${sum} + ${curr} = ${sum + curr}`);
  // increment to, 1) get next number, 2) prevent infinte loop
  sum += curr;
  curr++;
}
console.log('done');