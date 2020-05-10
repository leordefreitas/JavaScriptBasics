/* 
reminder:
true && true && true => true
true && true %% true && false => false

false || false || false => false
true || false || false => true

THIS IS THE RIGTH ORDER OF THE OPERATORS
()
!
&&
||

*/
const example1 = (false || true) && false;
/* 
(false || true) && false
true && false
false
*/
console.log(example1);

const example2 = true || (false && true || false);
/* 
true || (false && true || false)
true || (false || false)
true || false
true
*/
console.log(example2);

const example3 = false || (true && !(false || true)) && false;
/* 
false || (true && !(false || true)) && false
false || (true && !true) && false
false || (true && false) && false
false || false && false
false || false
false
*/
console.log(example3);