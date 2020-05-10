let someArray = ['cat', 'dog' , 'pigeon', 'giant squid'];
someArray.forEach((currEl, index, arr) => {
  console.log(currEl, index, arr, arr === someArray);
});

