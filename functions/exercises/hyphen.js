/* 
0 =>

1 =>
-

2 =>
-
--
--

3 =>
-
--
--
---
---
---

write your program so that it can do the same process but for other charactes
than hyphens
*/

const doSomethingwithHyphens = (number, symbol = '-') => {
  // this in the end of the if is the return.
  if (number === 0) console.log('There is nothing to show!');
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < i; j++) {
      console.log(symbol.repeat(i))
    }
  }
};

doSomethingwithHyphens(0, '*');
