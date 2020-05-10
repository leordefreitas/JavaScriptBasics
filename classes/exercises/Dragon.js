/* 
create a dragon class that has a name property, a damge property, and a type
property. i also want you guys to write a method that allows the dragon to attack
a wall. this method should make the dragon do some kind of sound, and then inflict
damage into the wall.
*/

class Dragon {
  constructor(name, damage = 1, type = 'regular') {
    this.name = name;
    this.damage = damage;
    this.type = type;
  }
  attackWall (wall) {
    wall.takeDamage(this);
  }
}

// ice
class IceDragon extends Dragon {
  constructor(name, damage) {
    super(name, damage, 'ice');
  }
}

// fire
class FireDragon extends Dragon {
  constructor(name, damage) {
    super(name, damage, 'fire');
  }
}

// electric
class EletricDragon extends Dragon {
  constructor(name, damage) {
    super(name, damage, 'eletric');
  }
}


// export
module.exports = {
  Regular: Dragon,
  IceDragon,
  FireDragon,
  EletricDragon,
}