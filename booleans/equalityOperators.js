//in this course, for the most part, we`re going to use === NOT ==
console.log(`2 + 2 = 4: ${2+2===4}`);
console.log(`2 + 2 = 3: ${2+2===3}`);

//the second output is false, but this is because 2+2 is not equal to 3
//this is the not equals operators
console.log(`2 + 2 != 3: ${2+2!==3}`);
console.log(`2 + 2 != 4: ${2+2!==4}`);
console.log(`'b' != 'b': ${'b'!=='b'}`);
console.log(`'b' = 'b': ${'b'==='b'}`);
console.log(`'b' != 'cb': ${'b'!=='cb'}`);

/*
look that below

1===1 true
2===1 false
2!=   true
1!=1  false
0!=0  false
*/