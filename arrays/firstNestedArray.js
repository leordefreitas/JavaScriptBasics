// write an array that contains 3 elements, each of wich is also an array.
// let`s call the other array(array containing arrays) zoo. in the zoo, store
// 3 types of monkey in the first element, 4 types od mythical creature in the
// second element, and 1 type of elephant in the 3rd element.
const zoo = [
  ['chimp', 'gorilla', 'orangutan'],
  ['dragon', 'wolfman', 'unicorn', 'goblin'],
  ['african elephant'], // the last comma(virgula) is optional
];
console.log(zoo);
console.log(`monkies in the zoo`, zoo[0]);
console.log(`mythical creatures in the zoo`, zoo[1]);
console.log(`elephants in the zoo`, zoo[2]);
