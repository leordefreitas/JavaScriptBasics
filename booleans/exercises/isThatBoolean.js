// write a program that test 5 different variable/constants and prints out
// whether or not they are a boolean meaning if it ir a boolean it should
// print out true, if it is not a boolean it should print out false
const a = 'blablabla';
const b = 100 + 17 ** 2;
const c = false && true || (false && false);
let d;
const e = 3 - 17 < 44;

console.log(`a: ${typeof(a) === 'boolean'}`);

/* 
a = 'blablabla'

`a: ${typeof(a)}`
`a: ${string}`
`a: string`
*/

console.log(`b: ${typeof(b) === 'boolean'}`);

/* 
b = 100 + 17 ** 2
b = 100 + 289
b = 389

`b: ${typeof(b)}`
`b: ${number}`
`b: number`
*/

console.log(`c: ${typeof(c) === 'boolean'}`);

/* 
c = false && true || (false && false)
c = false && true || false
c = false || false
c = false

`c: ${typeof(c)}`
`c: ${boolean}`
`c: boolean`
*/
console.log(`d: ${typeof(d) === 'boolean'}`);

/* 
d = undefined

`d: ${typeof(d)}`
`d: ${undefined}`
`d: undefined`
*/
console.log(`e: ${typeof(e) === 'boolean'}`);

/* 
MAKING DIFERENT THEN BEFORE JUST TO BE CLEAR
e = 3 - 17 < 44
e = -14 < 44
e = true

`e: ${typeof(e) === 'boolean'}`
`e: ${'boolean' === 'boolean'}`
`e: ${true}`
`e: true`
*/