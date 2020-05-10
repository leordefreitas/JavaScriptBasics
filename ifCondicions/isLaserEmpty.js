/* 
1. write a program that print out 'RELOAD' if we`re not amo, and otherwise
just prints out however much we have left

2. refactor our code to print out how much amo is left out of the max amo for
when we have amo remaining

3. we have to reload, fill up the laser back to the max amo and tell the user
'HOWEVER YOU WANT'

4.instead of reloading the laser completly, reload nit to only the half of the 
max
*/

// amo count
let amo = 0;
const maxAmo = 75;

// out of amo test and the reload
if (amo === 0) {
    console.log('TIME TO RELOAD...');
    amo = maxAmo / 2;
    console.log(`Laser refuel current amo: ${amo}/${maxAmo}`);
}
// the amo left
else {
    console.log(`Amo remaining: ${amo}/${maxAmo}`);
}