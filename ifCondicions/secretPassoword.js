// write a program that tells the user 'THAT`S NOT THE PASSOWORD' if they
// guess the passoword wrong, however, if the user guesses the correct passoword
// print out 'ACCESS GRANTED'

// passoword
const passoword = '12345678'; 
// test
const guess = 'testpassword';

//  check if not equal
if (passoword !== guess) {
    console.log('THAT\`S NOT THE PASSWORD');
}

// check for correct guess
if (passoword === guess) {
    console.log('ACESS GRANTED');
}

