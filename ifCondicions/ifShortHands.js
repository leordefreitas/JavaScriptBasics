// if conditions/statments that are only 1 line can be abriviated
if (true) {
    console.log('this is the traditional syntax');
}

if (true)
    console.log('this is also acceptable');

if(true) console.log('One line is also good');

// ALL THIS TYPE OF WRITE THE IF WORKS

// Let`s try doing multiple line, but with a false expression
if (false) 
    console.log('this should never run');
    console.log('what about us') //this one don`t be in the if because only one
// when they are in if without the {}
