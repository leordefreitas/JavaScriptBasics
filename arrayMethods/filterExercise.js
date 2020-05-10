class Bug {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}

class Spider extends Bug {
  constructor(name, numLegs = 8, poisonus = false)  {
    super(name, numLegs);
    this.poisonus = poisonus;
  }
}

class Mosquito extends Bug {
  constructor(name, numLegs = 4, full = true) {
    super(name, numLegs);
    this.full = full;
  }
}

class SuperMosquito extends Mosquito {
  constructor(name) {
    super(name);
    this.full = false;
  }

  yell () {
    console.log('ayayayay');
  }
}

const bugs = [
  new Bug('billy', 52),
  new Spider('jilly'),
  new Mosquito('philly', 6),
  new SuperMosquito('dangerous boy'),
  new Spider('silly', 8, true),
];
console.log(bugs);
console.log();

// filter the remaining bugs
/* 
dangers bugs are:
  poisinous
  more then 4 legs
  supermosquito
*/
let dangerousBugs = bugs.filter(e => {
  return (
    e.poisonus === true 
    || e.numLegs > 4 
    || e instanceof SuperMosquito //to see if they are a class i want
  )
});
console.log(dangerousBugs);