/* 
suppose we have data coming in FROM NASA, and it looks like this:
[
  ['ufos', 7],
  ['asteroids', 3],
  ['intergalactic dolphins', 2]
]
*/
const nasaData = [
  ['ufos', 7],
  ['asteroids', 3],
  ['intergalactic dolphins', 2]
];

const whatIsComing = nasaData.reduce((acc, curr, index, arr) => {
  const what = curr[0];
  const howMany = curr[1];
  acc[what] = howMany;
  return acc;
}, {});
console.log(whatIsComing);