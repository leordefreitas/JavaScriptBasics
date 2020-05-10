// filter is similar to map where it will give us a new arrzay, but we provide
// a function that FILTERS OUT elements which don`t pass a test

const evens = [18, 24, 7, -55, 30, 2.5].filter(e => {
  return e % 2 === 0;
});

const odds = [18, 24, 7, -55, 30, 2.5].filter(e => {
  // return e % 2 === 1 || e % 2 === -1; THIS WORKS
  return Math.abs(e % 2) === 1;
});
console.log(`evens: ${evens}`);
console.log(`odds: ${odds}`);