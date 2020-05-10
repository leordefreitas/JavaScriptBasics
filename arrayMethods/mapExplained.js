let animals = ['fish', 'pony', 'whale'];
let animalsMap = animals.map((arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
  // return arg1: give the value specifed
  // return arg2: give the index
  // return arg3: give the value of the array
  return arg1;
});


console.log('---------------');
console.log(animalsMap);