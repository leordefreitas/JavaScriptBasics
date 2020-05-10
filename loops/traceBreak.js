// write a program that counts from 3 to 10, and for whatever reason it stops
// printing after 5
for (let i = 3; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}
console.log('done')