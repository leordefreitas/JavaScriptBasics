//dragon has some health and we can shoot it 3 times. we want
//to see if we can deafeat the dragon

//dragon stats
const dragonHealth = 100;

// bazukas stats
const shot1Damage = 25;
const shot2Damage = 50;
const shot3Damage = 17;
const totalDamage = shot1Damage+shot2Damage+shot3Damage;

/*
tracing Logic down here
this is an approach to each shot and then calculate the heath 
after each shoot

dragon 100
            -25
dragon 75
            -50
dragon 25
            -17
dragon 8

we could also just sum up the damage from each shot and then 
subtract that from the starting health
dragon 100
            -25
            -50
            -17
------------------
            -92
dragon 100 - 92 = 8
*/
console.log(`the health leftover are ${dragonHealth-totalDamage}hp.`)
console.log(`the dragon was beaten: ${dragonHealth-totalDamage <=0}`);