/* 
in a game, a user has a wepon with a specific ammo count, we need to write code
that will represent how the player can interact with the wepon. here is evrything
the player needs to be able to do.

weapon
- maximum ammo
- current ammo
- name the weapon
- figure out damege per each ammo
- shoot a specific number of bullets out of the weapon
- reload the weapon to full capacity
- prints out how much damege the remaining ammo in the weapon could do
- for 3/5 ammo remaning and 10 dameger per ammo, this would print out
'30 damage available'
- visualizes the current ammo capacity of the weapon output: [|||  ] 3/5
*/

const weapon = {
  name: 'fal',
  maximum: 5,
  current: 3,
  damageEachAmmo: 10,
  shoot: function (value) {
    if (this.current - value < 0) {
      return this.current = 0;
    }
    else {
      return this.current -= value;
    }
  },
  reload: function () {
    return this.current = this.maximum;
  },
  remainingDamage: function () {
    let damage = this.current *  this.damageEachAmmo;
    return `${damage} damage remaining`;
  },
  visualizesCurrentAmmo: function () {
    let spaces = this.maximum - this.current;
    let ammoVisualizes = '|'.repeat(this.current);
    let spacesVisualizes = ' '.repeat(spaces);
    return `[${ammoVisualizes}${spacesVisualizes}] ${this.current}/${this.maximum}`;
  },
}

console.log(weapon);
console.log(weapon.shoot(4));
console.log(weapon.remainingDamage());
console.log(weapon.visualizesCurrentAmmo());
console.log(weapon.reload());
console.log(weapon);