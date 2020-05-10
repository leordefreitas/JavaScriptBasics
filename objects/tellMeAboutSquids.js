/* 
there is an object called squid lord, representing the lord of the squids
and he want you to tell me all about her.
*/

const squidLord = {
  doSquidThings: () => console.log('blloblboblbob'),
  howManyArms: 100,
  isDangerours: true,
  level: 1000000,
  name: 'squid lord',
  sex: 'female',
};

/* //1
console.log(squidLord);
console.log();

// 2
const squidLordKeys = Object.keys(squidLord);
for (let i = 0; i < squidLordKeys.length; i++) {
  const keyName = squidLordKeys[i];
  console.log(`Key: ${squidLordKeys[i]}, Value: ${squidLord[keyName]}`);
}
console.log();

// 3
// when is ky they are looking in the key of the object, can be any
// word i choose
for (let key in squidLord) {
  if ('isDangerours' === key) {
    console.log(`${key}: ${squidLord[key]}`);
  }
} */

console.log(this);