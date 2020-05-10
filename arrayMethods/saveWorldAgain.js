/* 
we have to prepare reports for the american president. Her name is
Dr. Yamoto, and she needs this information now.

in order to get the data to her clean and organized, we need to 
first structure the messy data that NASA gave us and create a 
urgent report class that has info about what is coming, how many are
coming, and when we found out. we need to have an instance of this class for every piece of data we got from NASA, and we need to reorganize back into an array.

solve this first with reduce. then, do it with map, then, do it with
forEach
*/

const nasaData = [
  ['ufos', 7, 'July 7th, 1982'],
  ['asteroids', 3, 'March 16th, 2019'],
  ['intergalactic dolphins', 2, 'April 27th, 2015'],
  ['solar flare', 1, 'March 17th, 2019'],
  ['radioctive space tyrannosaurs', 14, 'January 1st, 1912']
];

class NasaReports {
  constructor(name, howMany, foundOut) {
    this.name = name;
    this.howMany = howMany;
    this.foundOut = foundOut;
  }
}

// reduce
// let organizedReports = nasaData.reduce((acum, curr, index) => {
//   acum[index] = new NasaReports(curr[0], curr[1], curr[2]);
//   return acum;
// }, []);

// map
// let organizedReports = nasaData.map((curr) => {
//   return new NasaReports(curr[0], curr[1], curr[2]);
// });

// forEach
// let array = [];
// let organizedReports = nasaData.forEach((curr) => {
//   array.push(new NasaReports(curr[0], curr[1], curr[2]));
// });


console.log(array);