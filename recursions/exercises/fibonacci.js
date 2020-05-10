/* 
given a number n, can you implement an iterative solution calculate fibonacci
number n? assume the following fibonacci numbers indexing.
0: 0
1: 1
2: 1
3: 2
*/

const iterativeFibonacci = n => {
  const memory = [0, 1];
  if (0 <= n && n < 2) return memory[n];
  
  for (let i = memory.length; i <= n; i++) {
    const nextFibe = memory[i - 1] + memory[i - 2];
    memory.push(nextFibe);
  }
  return memory[memory.length - 1];
}

console.log(iterativeFibonacci(9));