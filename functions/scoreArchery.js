/* 
in a archery matc, an archer hits x targets, and their score is calculated as
1 + 2 + ... + (x -1) + x. we want to write a function where we calculate the 
archer`s score
*/

// this function calculates an ache`s score based on the number of hits the
// got.
function calculateArcherScore (hits = 5) { //that signal equal is to default the function when you put nothing in parentheses
  // let sum = 0;
  // for (let i = 1; i <= hits; i++) {
  //   sum += i;
  // }
  // return sum;
  // another way to do it more simple
  return sum = (hits * hits + 1)/2;
}

const scoreFrom10Hits = calculateArcherScore();
console.log(scoreFrom10Hits);