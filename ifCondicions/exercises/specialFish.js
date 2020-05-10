// we`re going to ask the user for a type of fish. if the user gives us one of
// the special ficsh, they`ll get some points. however, if the user gives us the
// SUPER special fish, which is still a special fish, they`ll get even more
// points

// just to know that was take of another file
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please give me a fish: ', (fish) => {
    // start user no prize
    let prize = 'nothing';

    // declare fishes
    const superSpecialFish = 'whale';
    const specialFish = `${superSpecialFish} swordfish octopus squid shark`;
    
    // check agaist special fish
    if (specialFish.includes(fish.toLowerCase())) {
        prize = 'NICE, but used shoelace';
        // compare against super special fish
        if (superSpecialFish === fish) {
            prize += ' AND NEW sandwich';
        }
    }    
    console.log(`This is what you\` won for your fish (${fish}): ${prize}`);
    rl.close();
});