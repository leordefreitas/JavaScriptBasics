// recursive function are functions that themselves. and that`s it

// suppose want a function that will print out all of the numbers between
// the first argument and 0 in this kind of order:
// 10 => 10 9 8 7 6 5 4 3 2 1 0
function printDownTo0 (wholeNumber) {
  console.log(wholeNumber);

  // decrease
  wholeNumber -= 1;
  // call again if wholenumber >= 0
  if (wholeNumber >= 0) printDownTo0(wholeNumber);
}


// using the function
printDownTo0(100);