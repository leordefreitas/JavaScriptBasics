// suppose we`re back at our pizza store, and we need to be able to put
// different topping on our pizza

// put pepperoni on pizza
function addPepperoni (pizza) {
  return pizza + ' with pepperoni';
}
// console.log(addPepperoni('regular pizza'));

// put extra cheese on pizza
function addExtraCheese (pizza) {
  return pizza + ' + 2x cheese';
}
// console.log(addExtraCheese('large pizza'));

// makes base pizza before topping
function makePizzaWithSize (size) {
  return `${size} pizza`;
}
// console.log(makePizza('small'));

// make pizza with size and topping
function makePizza (sizeString, toppingFunction) {
  // make pizza with sizeNO TOPPINGS YET
  let pizza = makePizzaWithSize(sizeString);

  // add a topping based on the topping string
  pizza = toppingFunction(pizza);

  return pizza;
}
console.log(makePizza('medium', addExtraCheese));// i can put functions inside the other functions ADDPEPPERONI is a function