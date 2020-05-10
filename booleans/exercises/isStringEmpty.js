// write a program that prints out whether or not a string is empty
const tmpString1 = 'dasdqmklnjhdkqjdbhasd';
const tmpString2 = '21938147364651';
const tmpString3 = '*^&*^$$%';
const tmpString4 = '';

// the empty string is just a string with nothing in it, which is''
console.log(`\nString 1 is empty: ${tmpString1===''}`);
console.log(`String 2 is empty: ${tmpString2===''}`);
console.log(`String 3 is empty: ${tmpString3===''}`);
console.log(`String 4 is empty: ${tmpString4===''}`);

console.log('\n--------------------------\n'); //here we are dividing

/* 
so we can definitely check whether our string is exactly the same as the
empty string, but there`s another way to do this too
*/
console.log(`String 1 is empty: ${tmpString1.length===0}`);
console.log(`String 2 is empty: ${tmpString2.length===0}`);
console.log(`String 3 is empty: ${tmpString3.length===0}`);
console.log(`String 4 is empty: ${tmpString4.length===0}`);