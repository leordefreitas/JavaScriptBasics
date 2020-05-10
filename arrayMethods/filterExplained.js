// ['cat', false, 'pig', 4.7, {}].filter((arg1, arg2, arg3) => {
//   // is the same then the oders so they are test, index and array
//   console.log(arg1, arg2, arg3);
// });

let filter = ['cat', false, 'pig', 4.7, {}].filter((arg1, arg2, arg3) => {
  return typeof(arg1) === 'number';
});
console.log(filter);