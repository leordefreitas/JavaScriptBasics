// write out that prints out the type of a value
const  boolConst = true;
const stringConst = 'some string';
const numberConst = 55;

console.log(`boolConst = ${boolConst}, type = ${typeof(boolConst)}`);

/* 
`boolConst = ${boolConst}, type = ${typeof(boolConst)}`
`boolConst = true, type = boolean`
*/

console.log(`stringConst = ${stringConst}, type = ${typeof(stringConst)}`);
console.log(`numberConst = ${numberConst}, type = ${typeof(numberConst)}`);

let boolVar = false;
let stringVar = 'some other string';
let numberVar = -22.4;

 
// you can give a variable a value undefined but only in LET never in CONST
let anotherVarible;
console.log(
    `\n\nanotherVariable = ${anotherVarible}, type = ${typeof(anotherVarible)}`
);

const anotherVarible2 = undefined;
console.log(  
    `\n\nanotherVariable2 = ${anotherVarible2}, type = ${typeof(anotherVarible2)}`
);