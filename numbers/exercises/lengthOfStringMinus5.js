// write a program that does the following:
/*
given a string , this program will tell me the length of 
the string - 5.
1. input `abcd`, output -1 (length of `abcd` is 4, and
4 - 5 = -1)
2. input `???????`, output 4 (length of 9 question marks is 
9, 9 - 5 = 4)
*/

// example 1 and 2

const input1 = `abcd`
const input2 = `?????????`
const input3 = `leolindu`.repeat(5)

// I doing
console.log(input1.length - 5)
console.log(input2.length - 5)

// teacher doing
console.log(`the length of ${input1} - 5 is: ${input1.length - 5}`)
console.log(`the length of the second word ${input2} - 5 is: ${input2.length - 5}`)
console.log(`the length of the third word ${input3} - 100 is: ${input3.length - 100}`)

const input4 = `trex rawrr`;
const input5 = `1`;

console.log(`the length of ${input4} - 5 is: ${input4.length -5}`)
console.log(`the length of ${input5} - 5 is: ${input5.length - 5}`)
