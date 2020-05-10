// suppose we have two array varibles
let arrayX = [];
let arrayY = arrayX;

// suppose we add 5 values to arrayX
for (let i = 0; i < 5; ++i) {
  arrayY.push(i);
}
console.log(arrayX, arrayY);

// suppose we update arrayY as well
for (let j = 0; j < 3; j++) {
  arrayY.push('Y');
}
console.log(arrayY, arrayX);

// now create a different array
const bowOfZebras = arrayY;
bowOfZebras.push('zebra');
console.log(bowOfZebras, arrayY, arrayX);

// bowOfZebras => arrayY => arrayX

// now, let`s change arrayY to be something complete different
arrayY = ['pidges', 88 - 40];
console.log(bowOfZebras, arrayY, arrayX);