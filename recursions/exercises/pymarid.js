let readlineSync = require('readline-sync');

// ask user for input
let marker = readlineSync.question('What the marker: ');
let size = +readlineSync.question('What size pyramid: ');

// recursively make a pyramid
const makePyramid = (marker, size, offset = 0) => {
  if (size < 1) return;
  makePyramid(marker, size - 1, offset + 1);

  const sizeString = marker.repeat(size - 1);
  console.log(' '.repeat(offset) + sizeString + marker + sizeString);
};

makePyramid(marker, size);



