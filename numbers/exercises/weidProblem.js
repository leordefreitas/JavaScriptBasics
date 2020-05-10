// i`m giong to give you a very long string

let longString = 'alsdhnajsmdhajklsdhnkasdabhnnnsnndbahjsdahsdnahksd'

// what i want you to do is stor a second string. this one should be short
const shortString = 'Okl'

/*
take the short string, get the squared length of it, and find the character
at the index in the longer string
*/
console.log(`short string: ${shortString}`);
console.log(`length of the short: ${shortString.length}`);
console.log(`square of the short string: ${shortString.length**2}`);
console.log(`long string: ${longString}`)
console.log(`character at index: ${longString[shortString.length**2]}`)


