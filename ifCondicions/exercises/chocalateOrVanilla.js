/*
write me a program that says 'YUPI' if your favorite ice cream flavor is
chocolate or vanilla, and 'EW' if it`s something else

1. print out yum if favorite ice cram is chocolate or vanilha
2. if your favorite ice cream flavor is strawberry, print out fruity
3. if you favorite ice cram flavor is mint, print out how fresh...
4. if your favorite ice cream flavor is coffee, print out disgusting
5. otherwise, print out i didn`t even know that was a flavor
*/
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What`s your favorite ice cream flavor? ", (answer) => {
    // convert answer to uppercase to compare against flavors
    const upperCaseAnswer = answer.toUpperCase()

    // analyze ice cream flavors
    // exercise number 1
    if (upperCaseAnswer === 'CHOCOLATE' || upperCaseAnswer === 'VANILLA') {
        console.log('YUM');
    }
    // exercise number 2
    else if (upperCaseAnswer === 'STRAWBERRY' || upperCaseAnswer === 'MANGO') {
        console.log('FRUITY :)');
    }
    // exercise number 3
    else if (upperCaseAnswer === 'MINT') {
        console.log('HOW FRESH...');
    }
    else if (upperCaseAnswer === 'COFFEE') {
        console.log('DISGUSTING :(');
    }
    else {
        console.log("I DIN`T EVEN KNOW THAT WAS A FLAVOR");
    }
    rl.close();
});
