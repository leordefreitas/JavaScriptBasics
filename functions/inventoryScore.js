/* 
suppose we have a player in a game, and their inventory is stored in a string.
their inventory will look something like 'gold coin | puppy | magic sword'.
our job is to measure up how much their inventory us worth if they were to give
their bag (inventory) to somebody and sell all of the items in it

our job is to get the value of their entire inventory on coins. here are the values
of the items in the world:
-gold cup = 5
-puppy = 4
- magic sword = 10
-tooth of a magic whale = 20
-tentacle of a giant squid = 100
-anything else = 1

ready, set, go.
*/

const getInventoryValue = inventoryString => {
  // split string an array
  const inventory = inventoryString.split(' | ');
  console.log(inventory);

  // sum of the values of the items
  let sum = 0;

  // iterate over each item
  for (let i = 0; i < inventory.length; i++) {
    // get value of current item
    const item = inventory[i];

    if (item === 'gold cup') sum += 5;
    else if (item === 'puppy') sum += 4;
    else if (item === 'magic sword') sum += 10;
    else if (item === 'tooth of a majestic whale') sum += 20;
    else if (item === 'tentacle of the giant squid') sum += 100;
    else sum += 1;
  }
  console.log(`Value of the inventory: ${sum}`);
  return sum;
}

// test inventory value
getInventoryValue(
  'tentacle of the giant squid | japanese language textbook | tooth of a majestic whale | gold cup | puppy | magic sword'
  );
