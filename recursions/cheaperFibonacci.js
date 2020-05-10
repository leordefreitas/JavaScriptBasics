let fibCount = 0;

// regular fibonacci
const fibonacci = n => {
  fibCount++;

  if (n === 0) return 0;
  if (n === 1) return 1;

  // defaut behavior
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// cheapere fibonacci
cheapCount = 0;

const knowValues = {
  0: 0,
  1: 1,
};

const cheaperFibonacci = n => {
  cheapCount++;
  if (n in knowValues) return knowValues[n];

  // otherwise
  const nFibonacciValue = cheaperFibonacci(n - 1) + cheaperFibonacci(n - 2);
  knowValues[n] = nFibonacciValue;
  return nFibonacciValue;
}




let n = 40;

let start = Date.now();
console.log(
  `${fibonacci(n)}, count = ${fibCount}, took = ${(Date.now() - start) / 10}s`
);

let startCheap = Date.now();
console.log(
  `${cheaperFibonacci(n)}, count = ${cheapCount}, took = ${(Date.now() - startCheap) / 10}s`
);