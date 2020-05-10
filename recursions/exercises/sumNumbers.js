/* 
write a recursive function that will sum of the numbers beween 0 and some number
positive number like n
*/

// recursive solution 0
const sum = number => {
  let finalSum = number;
  if (number > 0) finalSum += sum(number - 1);
  return finalSum;
};
console.log(sum(40));

// recursive solution 1
const recursiveSolution1 = (n, sumSoFar = 0) => {
  const nextSum = sumSoFar + n;
  if (n === 1) return nextSum;
  return recursiveSolution1(n - 1, sumSoFar + n);
};
console.log(recursiveSolution1(40));

/* 
tracing

  recursiveSum(3)
    recursiveSum
    n = 3
    sumSoFar = 0
    nextSum = 3
    return recursiveSum(2, 3)
*/

// iterative solution 
const iterativeSum = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(iterativeSum(40));

// neither iterative for recursive solution
const quickSum = n => n * (n + 1) / 2;
console.log(quickSum(40));