// 1. take the following string and split it into an array
// convert this into the following
// [dragon, panther, whale, giant, squid, take-out, catdog], using the function .join()
// let tastyString = 'dragon - panther - whale - giant squid - take-out - catdog';
// let tastyArray = [];
// tastyArray = tastyString.split(' - ');
// console.log(tastyArray);


// 2.given the array from part 1 that you created, join the elements back together
// into a string like this:
// 'dragon, panther, whale, giant squid, take-out, cat dog'
// let tastyString2 = tastyArray.join(', ');
// console.log(tastyString2);

// 3. using a bit of brain power, can you think of a way to, if given a string
// quickly reverse the string
// tastyArray = tastyString.split(' - ');
// console.log(tastyArray);
// tastyArray.reverse();
// console.log(tastyArray);
// tastyString = tastyArray.join(' - ')
// console.log(tastyString);
const anyString = 'this is any string';
const reversed = anyString.split('').reverse().join('');// we can but all in the same line`
console.log(anyString);
console.log(reversed);
