// write a program, assuming you have some user`s input as a string, will
// create a version of that string that has  no spaces in it. do this using
// iteration, and use continue whenever the current character you`re observing
// is a space. HOWEVER, you program should also use break
// 20 characters and stop once it`s collected.

/* 
input: abcde fghlk  pq 
output: abcde fghlk pq

2. brak once ooutput`s length hits 20
 */
const input = 'qqsdq qdwsd qdqd qdqdasd dasmd qmd mq d ajsdnajkbsd';
let output = '';

// loop
for (let i = 0; i < input.length; i++) {
  // check if the input has space
  if (input[i] === ' ') {
    continue;
  }
  output += input[i];

  // check if the output has 20 of length
  if (output.length === 20) {
    break;
  }
}
console.log(`${input}\n${output}`);
console.log('done');