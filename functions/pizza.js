/* 
suppose we work at a restaurant and we have an array of itens that represents
a tray of foods. we need to check if the tray of food has pizza in it
*/


// some code that check  whether or not a tray of food has pizza in it
function hasPizza (foodTray) {
  return foodTray.indexOf('pizza') !== -1;
}

// create a food tray
const foodTray = ['pizza', 'swordfish', 'candy canes', 'soda'];
console.log(`Food tray has pizza: ${hasPizza(foodTray)}`);


const diffFoodTray = ['soda', 'chocolate'];
console.log(`Diff food tray has pizza: ${hasPizza(diffFoodTray)}`);