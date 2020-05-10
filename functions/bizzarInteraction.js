/* 
some guy on the street is going to give us $5 to take a randow item from our
bag. the way this works is that we take all of our items out of our bag and put
them on a table in front of the guy from left to right, where items on the left
are the least valuable. and the item all the way on the right, this guy is looking 
for a particular item. and so if he sees that item. he`s taking it, EVEN IF there is 
something in the right, that is even more valueble to us . however, if he doesn`t we
don`t have what he`s looking for, he`s just going to take the item all the way
to the right, so he`s not really RANDOMLY selecting any of our times: he`s lying.
*/

// weird guy choice
function getWeirdGuysChoice (items, specialItem) {
  let chosenIndex = -1;
  
  // iterate over the items
  for (let i = 0; i < items.length; i++) {
    if (items[i] === specialItem) {
      return items[i];
    }
  }

  // if he din`t find what he was looking for, he`s taking the most valuable
  // item (all the way to the right)
  return items[items.length - 1]; //just to put the last index
}

console.log(getWeirdGuysChoice(['cap', 'salt', 'iphone'], 'cap'));