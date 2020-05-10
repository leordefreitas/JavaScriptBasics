//  arrays allow us to store multiple pieces of sata. in javascript, you can
// can store whatever you want in an array, and on array can store multiple
// types. however, in other languages, it`s often case that you can`t mix types
const arr = [17, false, 'some string about my aunt john'];
console.log(arr);
console.log(`Length: ${arr.length}`);

// very often we need to manipulate the values in a array, suppose you want
// to change a value at a specific index... let`s say index 1
arr[1] = 'batman';
console.log(arr);
console.log(`Length: ${arr.length}`);

// ADD ELEMENTS
// you can add an element to an array, either at the front or the back
// add in the end of the array function ".puss()"
arr.push(14 - 2);
console.log(arr);
console.log(`Length: ${arr.length}`);

// add in the front of an array
arr.unshift('zack');
console.log(arr);
console.log(`Length: ${arr.length}`);

// REMOVE ELEMENTS
// elements can be removes, ".pop()" by the end, they take off the element
// but they show only the element he take away
// back
const oldLastElement = arr.pop();
console.log(`${arr}, Removed: ${oldLastElement}`);

// front
const oldFrontElement = arr.shift();
console.log(`${arr}, Old first element removed: ${oldFrontElement}`);