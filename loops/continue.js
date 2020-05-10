// write a program that counts from 0 to 7 BUT it skips all
// the numbers between 3 and 5 (inclusive)
for (let i = 0; i < 7; ++i) {
    if(3 <= i && i <= 5) {
        continue;
    }
    console.log(i);
}