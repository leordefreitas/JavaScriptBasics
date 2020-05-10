// what about a differen range, but still counting backwards?
/* 
write a program that counts backwards from 35 to -22, but only counts every 18th
number
*/
console.log('----- FOR LOOP -----');
for (let i = 35; i >= -22; i -= 18) {
    console.log(i);
}

console.log('----- WHILE -----');
let i = 35;
while ( i >= -22) {
  console.log(i);
  i -= 18;  
}