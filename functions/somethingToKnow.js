// function arguments follow the same rules as variables do for assignment by
// value vs. assignment by reference

/* 
let x = 2;
let y = x;
x = 3;
console.log(x, y);
*/

/* 
let name = 'mike';

function printSomething (thing) {
  thing = 'skateboard';
  console.log(thing);
}

printSomething(name);
console.log(name);
*/

let arrayElements = [3, 4, 5];

function removeElementAndPrint (arr) {
  console.log(arr.pop());
}

console.log(`Array before function`, arrayElements);
//to make copy an don`t change the opriginal array
removeElementAndPrint(arrayElements.slice());
console.log(`Array after function`, arrayElements)