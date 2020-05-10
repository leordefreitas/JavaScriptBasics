// write a program to sum up all the numbers in an array
const numbers = [25, 2, 3, 4, 7, 22, -55, 103];
let sum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console(sum);