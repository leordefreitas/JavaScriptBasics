// this printout the things is in your left, when the function is called, only can be used the THIS
// using the function, not the fat arrow function
function printOutCurrentThis () { console.log(this); }

const dog = {
  printOutThis: printOutCurrentThis,
  name: 'scruffy',
  type: 'canine',
};

const cat = {
  printOutThis: printOutCurrentThis,
  name: 'fluffy',
  type: 'feline',
};

dog.printOutThis();
cat.printOutThis();