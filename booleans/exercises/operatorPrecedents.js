/* 
reminder:
true && true && true => true
true && true %% true && false => false

false || false || false => false
true || false || false => true
*/
const example1 = false || true;
/* 
false || true => true
*/
console.log(example1);
const example2 = true && true || false;
/* 
true && true || false => true || fale => true
*/
console.log(example2);
const example3 = false || false || false && true;
/* 
false || false || false && true => false || false || false
false || false => false
*/
console.log(example3);
const example4 = true && false || true || false && true;
/* 
true && false || true || false && true => false || true || false
true || false => true
*/
console.log(example4);