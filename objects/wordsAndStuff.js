/* 
i would you create an object napping nouns to adjectives that describe
the nouns. specifically, each key should be a noun 'string', and each value for
the specified key should be an array of 2 strings, where these array elements
are adjectives you associate with the noun
fire => hot, pain
*/


// 1.create the date structure with 5 different nouns(wich means 10 adjectives
//   in total}
const nouns = {
  fire: ['hot', 'pain'],
  car: ['fast', 'expensive'],
  bag: ['carry things', 'usefull'],
  cellphone: ['call people', 'take picture'],
  shoes: ['soft', 'cool'],
};

// 2. print out whether water is in your object (as key)
const keyToLook = 'water';
if (nouns[keyToLook] === undefined) {
  console.log(`There isn\`t a noun called ${keyToLook}`);
}
else {
  console.log(`There is ${keyToLook} in the object!`);
}

// 3. delete your least favorite key
const leastFavorite = 'fire';

console.log(nouns);
delete nouns[leastFavorite];
console.log(nouns);

// 4. print out of all the keys left over the object, delete the 2nd key

console.log(Object.keys(nouns));
delete nouns[Object.keys(nouns)[1]];
console.log(Object.keys(nouns));

// 5. print out all the adjectives in the object
console.log(Object.values(nouns));

// 6. overwrite the adjectives stored in ANY of the existing keys
nouns.car = ['small', 'nice'];
nouns.cellphone = ['expensive', 'trick'];
nouns.shoes = ['cozy', 'warn'];
console.log(nouns);
