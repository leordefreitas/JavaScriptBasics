// you can have loops within loops

// let`s try and write the program that prints out the following
/* 
a ===
a 0
a 1
a 2
---------------
b ===
b 0
b 1
b 2
--------------
*/

// let`s start by iterating over a and b
let characters = 'ab';
// interate over each character
for (let i = 0; i < characters.length; i++) {
    let currChar = characters[i];

    // print current character
    console.log(`${currChar} ===`);
    
    // iterate over 0, 1, 2
    for (let j = 0; j < 3; j++) {
        console.log(`${currChar} ${j}`);
    }

    // print separator
    console.log('----------');
}
console.log('done');