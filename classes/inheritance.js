class Animal {
  constructor(name, weigth, hungerOutOf10, howFast = null) {
    this.name = name;
    this.weigth = weigth;
    this.howFast = howFast;

    // hunger is given us based an a number out of 10
    this.hunger = 'starving';
    if (0 < hungerOutOf10 && hungerOutOf10 <= 3) {
      this.hunger = 'hungry';
    }
    else if (3 < hungerOutOf10 && hungerOutOf10 <= 6) {
      this.hunger = 'not hungry';
    }
    else if (6 < hungerOutOf10) {
      this.hunger = 'full';
    }
  }

  // make mouth sound
  makeMouthSound () {
    console.log(`${this.name} goes 'ugh'`);
  }
}

// all horses weight 1500 are half full to start (5/10 fullness)
class Horse extends Animal {
  constructor(name, furColor = 'brown') {
    super(name, '1500lbs', 5, 'pretty fast');
    this.furColor = furColor;
  }
  makeMouthSound() {
    console.log(`${this.name} goes 'irrrar irrrar'`);
    super.makeMouthSound();
  }
}

// tiny tortoise weigh 10lbs, are full to start, an they`re extremaly slow
class tinyTortoise extends Animal {
  constructor(name, shellNiceness) {
    super(name, '20lbs', 10, 'extremely slow');
    this.shellNiceness = shellNiceness;
  }
  makeMouthSound() {
    console.log(`${this.name} goes 'thump thump'`);
  }
}

const vanillaAnimal = new Animal();
const babyHorse = new Horse('flufly');
const babyTinyTortoise = new tinyTortoise('Blastooise', 'very nice');

// make 10 giant rabits
const giantRabit = [];
for (let i = 0; i < 10; i++) {
  giantRabit.push(new Horse(`pe de pano ${i}`, 'green'));
}
console.log(giantRabit);


















/* 
const hugryAnimal = new Animal('mr. hungry', '50kg', 2.5);
console.log(hugryAnimal);

const notHugryAnimal = new Animal('mr. not hungry', '100kg', 4);
console.log(notHugryAnimal);

const fullAnimal = new Animal('mr. eats too much', '400kg', 9);
console.log(fullAnimal);

const starvingAnimal = new Animal('ms. empty', '5kg', -1);
console.log(starvingAnimal); 
console.log(babyTinyTortoise);
*/