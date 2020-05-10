/* 
crate a wall class that takes in height, a strong type, and a weak type as 
arguments, based on this, this instance should create data to store the values
passed in as arguments, additionally, the wall should maintain a current height
property, an abillity to take damage, and it should also be able to print out
the wall based on it`s current height.
*/
class Wall {
  constructor (height, strongAgainst, weakAgainst) {
    this.height = height;
    this.currrentHeight = height;
    this.strongAgainst = strongAgainst;
    this.weakAgainst = weakAgainst;
  }

  // returns true if the wall is down, faalse otherwise
  get hasFallen () {
    return this.currrentHeight <= 0;
  }
  takeDamage (dragon) {
    let applieDamage = dragon.damage;
    let dragonType = dragon.type;
    let dragonName = dragon.name;

    if (dragonType === this.strongAgainst) applieDamage = 0;
    else if (dragonType === this.weakAgainst) applieDamage *= 2;

    console.log(`\n${dragonName} attack the wall with the ${applieDamage} of damage!`);

    return  this.currrentHeight -= applieDamage;
  }
  showWall () {
    console.log(`\nHeight: ${this.currrentHeight}/${this.height} | Strong Against: ${this.strongAgainst} | Weak Against: ${this.weakAgainst}`);
    for (let i = 0; i < this.currrentHeight; i++) {
      console.log(' '.repeat(10) + '#'.repeat(20));
    }
  }
}

// export files frowm this code
module.exports = Wall;