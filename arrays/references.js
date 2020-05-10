// so far in javaScript, we`ve used the === to check whether 2 things
// are exactly the same
// primitive is the exactly value to compare
console.log(`Booleans: ${true === true}`);
console.log(`Numbers: ${4 === 4}`);
console.log(`Strings: ${'cat' === 'cat'}`);
console.log(`Undefined: ${undefined === undefined}`);
console.log(`Null: ${null === null}`);

// however, arrays are this thing calles an object, and objects are 
// differents
// non primite they use a space in memorie 
console.log('\nCOMPARING NON PRIMITIVE TYPES');
console.log(`Arrays: ${[1, 2, 3] === [1, 2, 3]}`);
console.log(`EMPTY Arrays: ${[] === []}`);

// here is exactly the same
let arrayX = [];
console.log(`Array X: ${arrayX === arrayX}`);
