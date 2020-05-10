// write a program that prints out some mountais, where the user specifies
// the height of mountais, and also specifies the number of mountains

/* 
=
==
===
==
=

=
==
===
====
===
==
=
*/

const printMountains = (height, count) => {
  for (let j = 0; j < count; j++){
    for (let i = 0; i < height + 1; i++) {
      console.log('='.repeat(i));
    }
    for (let i = height - 1; i >= 0; i--) {
      console.log('='.repeat(i));
    }
  }
};

printMountains(4, 2);