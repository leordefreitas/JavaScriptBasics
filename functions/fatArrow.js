// let`s writea function tht prints out if two people love each other
function theyLoveEachOther (personA, personB) {
  console.log(`${personA} and ${personB} are in love.`);
}
// theyLoveEachOther('Joe', 'John');

// this function can also be written using a fat arrow
const theyLoveEachOtherFatArrow = (personA, personB) => {
  console.log(`Using the fat arrow, ${personA} and ${personB} are in love.`);
};
// theyLoveEachOtherFatArrow('Bernice', 'Samantha');
// theyLoveEachOtherFatArrow('that cat', 'that dog');

// if a function has only 1 argument, it can be abbreviated
// you don`t need to put parentheses when has 1 argument only
const printOutTheThing = thing => {
  console.log(thing);
};
printOutTheThing('giraffe');

// what if our fuction is just 1 line
const return2 = () => 2; //don`t write 'return' just the value you want
// if (true) console.log('hello');
console.log(return2());

// you need to put the function above with fat arrow function
console.log(returnError);
const returnError = () => 'error'; // will return error becouse they have to be above not below