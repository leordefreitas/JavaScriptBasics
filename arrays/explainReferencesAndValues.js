// suppose we have squids, two of them
let esmereldaAge = 20;
let miguelAge = 20;
console.log(`Esmeralda\`s age: ${esmereldaAge}, Miguel\`s age: ${miguelAge}`);

// this program could also be written (missing the let statments) as
esmereldaAge = 20;
miguelAge = esmereldaAge;
console.log(`Esmeralda\`s age: ${esmereldaAge}, Miguel\`s age: ${miguelAge}`);

// what if we make changes to miguel`s age?
miguelAge = 25;
console.log(`Esmeralda\`s age: ${esmereldaAge}, Miguel\`s age: ${miguelAge}`);


// when in NON primitive numbers when you give the same value
// they don`t copy they just look in the same box to the value you
// assign
// suppose these squids both have boxes of treasure
let esmeraldaTreasure = ['burrito', 1000000];
let miguelTreasure = esmeraldaTreasure;
console.log(`Esmeralda\` treasure: ${esmeraldaTreasure}, Miguel\` treasure: ${miguelTreasure}`);
console.log(`Are their treasures boxes the same: ${esmeraldaTreasure === miguelTreasure}`);
console.log('-'.repeat(5) + ' 2 boxes of treasure below ' + '-'.repeat(5));

// suppose we declare to change esmeralda`s box of treasure here
esmeraldaTreasure.push('nice pencil');
console.log(`Esmeralda\` treasure: ${esmeraldaTreasure}, Miguel\` treasure: ${miguelTreasure}`);

// suppose miguel wants his OWN box of treasure with the same stuff
miguelTreasure = ['sandwich', 'yoyo', 20];
console.log(`Esmeralda\` treasure: ${esmeraldaTreasure}, Miguel\` treasure: ${miguelTreasure}`);
console.log(`Are their treasures boxes the same: ${esmeraldaTreasure === miguelTreasure}`);

// give another pencil
esmeraldaTreasure.push('nice pencil');
console.log(`Esmeralda\` treasure: ${esmeraldaTreasure}, Miguel\` treasure: ${miguelTreasure}`);