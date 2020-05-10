/* 
remenber that a factorial for some number like 5 is just 5*4*3*2*1 = 5!

prlase write a program for me that will compute 5 factorial iteratively.
do this variant first. then, once you`ve written the interative solution, 
implement a recursive solution
*/

const factorialRecursive = n => {
  if (n === 1) return n;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(3));