// scoping gives us the ability to have some privacy in out code
// remenber this is like in {} is one box inside another
/* let x;
x = 17;

if (true) {
    x *= 2;
    console.log('it is true!!');

    let fish ='blub';
    console.log(fish);
}

console.log(x);
console.log(fish); */

let x = 2;

if (true) {
    let x = 4;
    console.log(x);
}

console.log(x);