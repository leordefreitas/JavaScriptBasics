// here is how the else if works, need one if first to use else if
const condition0 = true;
const condition1 = true;
const condition2 = true;

// condition0
if (condition0) {
    console.log('condition 0');
}
// condition1
else if (condition1) {
    console.log('condition 1');
}
// condition2
else if (condition2) {
    console.log('condition 2');
}
// catch all
else {
    console.log('this is the catch all');
}
// if block aways star with the if
if (condition1) {
    console.log('this is a new block');
}

console.log('done');
