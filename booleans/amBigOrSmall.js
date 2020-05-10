//this program wil, in a weird way, tell us whether we are big or if we
//are small

//let`s say the criteria for big is the following: you need to have a heigth
//of at least 80 inches or you must weight over 250 Lbs
const heightInInches = 39;
const weightInPounds = 95;


const isHeightBig = heightInInches>80; //resultad false
const isWeightBig = weightInPounds>250; //resultad true

//print out height and weigth
console.log(
    `\nBIG TEST: Height: ${heightInInches}/80 in, Weight: ${weightInPounds}/250 lbs`
);

const amIBig = isHeightBig || isWeightBig; //we need only one true to show
console.log(`I am big: ${amIBig}`);

//to figure out if we are small, we need BOTH our height to be < 40 AND our
//weight to be < 100
const isHeightSmall = heightInInches<40;
const isWeightSmall = weightInPounds<100;

console.log('\n---------------\n')
console.log(
    `SMALL TEST: Height: ${heightInInches}/40 in, Weight: ${weightInPounds}/100 lbs`
);
const iAmSmall = isHeightSmall && isWeightSmall; //operator for AND condicion
console.log(`I am small: ${iAmSmall}`);
