/* 
there`s this monster in town and it likes to scare people. however, this monster
is acttually a coward, and so when it get`s confronted by somebody who isn`t scared,
it tries to avoid conflict by talking about itself in the 3rd person and bragging 
about how dangerous it is.

we need to setup an object that represents this monster, it should have
the following properties:
-name - STRING
-danger level - STRING/NUMBER
-something to brag about (I ate 3 entire pizzas by myself) - STRING
-intimidate person - FUNCTION, takes in a person`s name as an argument
*/

const monster = {
  name: 'cyclop',
  dangerLevel: 59,
  somethingToBrag: [
    'I did my homework!',
    'I can run a half mile in under 45 minutes',
    'I call to my mom yesterday',
  ],
  intimidatePerson: function (personName) {
    console.log(`The ${personName} is so scared by the ${this.name}, becouse the level of then is ${this.dangerLevel}.`);
  },
};

console.log(monster);
monster.intimidatePerson('Leonardo');