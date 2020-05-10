/*
3 ways (that we know about) to make a string
1. 'single quot string'
2. "souble quote string"
3. `back string` <-------- template string
*/

console.log('this is some math---->' + (2+5) + '<----look there')
console.log(`this is some math----> ${ 2 + 5 } <----look there`)

const someTemplateString = `this is a ${2*6} template string`
console.log(someTemplateString)