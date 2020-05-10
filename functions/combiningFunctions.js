// functions can be used with other functions. for example, one function
// can call another function

// this is a way to write and works so we can used
// function add2Numbers (a, b) { return a + b; }

// this function adds 2 numbers
function add2Numbers (a, b) { 
  return a + b; 
}
// this function multiples 2 numbers together
function multiply2Numbers (something, anotherThing) {
  return something * anotherThing;
}
// this function prints out the results of ading 2 numbers together AND another
// result of multiplying the same 2 numbers together
function addAndMultiply2Numbers (a, b) {
  console.log(add2Numbers(a, b));
  console.log(multiply2Numbers(a, b));
}

// add
console.log(add2Numbers(100, 200));
// multiply
console.log(multiply2Numbers(7, 7));
// add and multiply
console.log(addAndMultiply2Numbers(4, 3));