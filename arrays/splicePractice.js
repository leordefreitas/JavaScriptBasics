const figthers = ['mage', 'warrior', 'king', 'trusty steed'];

// 1. remove the trust steed and add a wizard and a worlock in it`s place

// 2. suppose the king falls in batle .. remove the king and put the queen in 
// his place

// 3. suppose these figthers are actually in the same order as they are on the
// battlefield, and the first 3 fighters fall, represent the figthers that
// remain in a NEW ARRAY called REMAINFIGTHERS (use splice an slice)

// 4. add 2 peasents to the front and 3 to the back of the REMAINFIGTHERS

/* 
MY RESOLUTION
// 1
const fighters1 = figthers.slice();
fighters1.splice(3, 1, 'wizard', 'warlock');
console.log(`The first figthers: ${figthers}, after the changes: ${fighters1}`)

// 2
const fighters2 = fighters1.slice();
fighters1.splice(2, 1, 'queen');
console.log(`The figthers are: [${fighters2}], after the fall of the king the army was: [${fighters1}]`);

// 3
const remainFigthers = fighters1.slice();
remainFigthers.splice(0, 3);
console.log(`The army after the fall of the 3 firts soldier: [${remainFigthers}]`);

// 4
remainFigthers.push('peasents', 'peasents', 'peasents');
remainFigthers.unshift('peasents', 'peasents');
console.log(`After we add the peasents the array whith the soldiers: [${remainFigthers}]`);
 */

// 1
const fighters = ['mage', 'warrior', 'king', 'trusty steed'];
console.log(`FIGTHERS TO START [${figthers}]`);

figthers.splice(-1, 1, 'wizard', 'warlock'); // using negative number use to the last number you want
console.log(`1: [${figthers}]`);

// 2
console.log(`REMOVED: [${figthers.splice(2, 1, 'queen')}]`); // they show the remopved in the console.log
console.log(`2: [${figthers}]`);

// 3
const remainFigthers = figthers.slice();
console.log(`The fallen figthers: [${remainFigthers.splice(0, 3)}]`);
console.log(`The remaining figthers: [${remainFigthers}]`);

// 4
remainFigthers.splice(0, 0, 'peasents', 'peasents');
remainFigthers.splice(remainFigthers.length, 0, 'peasents', 'peasents', 'peasents');
console.log(`4: [${remainFigthers}]`);