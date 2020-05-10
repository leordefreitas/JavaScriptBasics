// reduce allows you to reduce all of the elemnts in an aray to a single
// 'thing' honestly it can be whatever you want
/* 
forEach, map, filter = currentElement, index, array
reduce = accumulator, currentElement, index, array
*/

let reduce = [1, 2, 3].reduce((acc, currEl, index, arr) => {
  acc = acc + currEl;
  return acc;
}, 5); //this 5 is the value star in the acumulator
console.log(reduce);
