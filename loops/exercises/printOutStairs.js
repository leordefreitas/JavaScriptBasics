// this program will print out a specific number of stairs cases, each with
// the same height

/* 
3 stair cases, height of 4 each
-
--
---
----
-
--
---
----
-
--
---
----
*/
// for each staicase
for (let i = 0; i < 3; i++) {
  // this will be the staircase we`ve crated so far
  let stair = '-';
  // add a stair incrementally for this staircase
  for(let j = 0; j <= 4; j++) {
    console.log(stair.repeat(j));
    // add 1 stair for next iteration
  }
}