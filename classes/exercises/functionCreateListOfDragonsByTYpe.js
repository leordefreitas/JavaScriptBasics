// create list of dragons by the type
function createListOfDragonsByType() {
  if (addDragonAttack === 'fire') {
    const fireDragon = new Dragon.FireDragon(addName, addDamage, addDragonAttack);
    dragons.push(fireDragon);
  }
  else if (addDragonAttack === 'ice') {
    const iceDragon = new Dragon.IceDragon(addName, addDamage, addDragonAttack);
    dragons.push(iceDragon);
  }
  else if (addDragonAttack === 'eletric') {
    const eletricDragon = new Dragon.EletricDragon(addName, addDamage, addDragonAttack);
    dragons.push(eletricDragon);
  }
  else {
    const differentDragon = new Dragon.Regular(addName, addDamage, addDragonAttack);
    dragons.push(differentDragon);
  }
}

module.exports = createListOfDragonsByType();