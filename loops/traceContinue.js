// trace a program that skips even numbers when counting from 0 to 4
/* 
1
3
5
*/
for (let i = 0; i <= 4; i++) {
    // response here is true or false
    const isEven = i % 2 === 0;
    if (isEven) continue;

    console.log(i);
}
console.log('done')