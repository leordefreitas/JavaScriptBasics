// title case is going to mean the follwing for our purposes
/* 
the cat is brown and blue
The Cat Is Brown And Blue

THIS is a tic-tac-toe board
THIS Is A Tic-tac-toe Board
*/

// I TRY TO TO DO
/* 
// strings
const sentence1 = 'the cat is brown and blue';
const sentence2 = 'THIS is a tic-tac-toe board';

const titleCase = string => {
  // copy the string
  let stringCopy = string;
  // transforming in an array
  stringCopy.split(' ');
  // put the uppercase
  for (let i = 0; i < stringCopy.length; i++) {
    stringCopy[i].split('');
    stringCopy[i][0].toUpperCase();
    console.log(stringCopy);
    stringCopy[i].join('');
    stringCopy[i].unshift();

  }
  stringCopy.join(' ');
  return string;
};

// print the result
console.log(titleCase(sentence1));
*/

// THE ZACH RESPONSE
// convert a strign to the title case standard described above
const convertToTitleCase = original => {
  let titleCase = [];

  // iterate over each word
  const words = original.split(' ');
  for (let i = 0; i < words.length; i++) {
    titleCase.push(`${words[i][0].toUpperCase()}${words[i].substr(1)}`);
  }
  titleCase = titleCase.join(' ');
  console.log(`Original: ${original}, Title Case: ${titleCase}`);
};

convertToTitleCase('the cat is brown and blue');
convertToTitleCase('THIS is a tic-tac-toe board');




