// write a program that, given an array, makes a copy of the array and reverses
// the order of the elements

//  MY SOLUTION 
// 1
const rigthOrder = [];
for (let i = 1; i < 6; i++) {
  rigthOrder.push(i);
}
console.log(rigthOrder);
// 2
const secondOrder = rigthOrder.slice();
console.log(secondOrder);

// 3
const thirdOrder = [];
for (let j = rigthOrder.length - 1; j >= 0; j--) {
  thirdOrder.push(secondOrder[j])
} 
console.log(thirdOrder);


const flavors = ['chocolate', 'vanilla', 'strawberry'];
const flavorsReversed = [];

// loop over original array
// for (let i = flavors.length - 1; i >= 0; i--) {
//   flavorsReversed.push(flavors[i]);
// }
// console.log(flavors);
// console.log(flavorsReversed);

// testing another aproach
for (let i = 0; i < flavors.length; i++) {
  flavorsReversed.unshift(flavors[i]);
}
console.log(flavors);
console.log(flavorsReversed);