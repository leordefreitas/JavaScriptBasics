// forEach allows us to pefrom a function an each element in an array
function print (thing) {
  console.log(thing);
}

function collectObject (obeject, key) {
  obeject[key] = key;
}

let testArray = ['cat', 2, 'dog', -17, false];
let someObject = {};

console.log(someObject);
testArray.forEach(print);
testArray.forEach(element => collectObject(someObject, element));
console.log(someObject);