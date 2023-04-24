

// 1:
let i1 = 0;

while (i1 <= 10) {
  console.log(i1);  //output: 0 1 2 3 4 5 6 7 8 9 10
  i1++;
}

// 2:
let i = 0;

while (i <= 10) {
  console.log(i, i % 2 === 0 ? 'even' : 'odd'); 
  i++;
}

// output: 

// 0 even
// 1 odd
// 2 even
// 3 odd
// 4 even
// 5 odd
// 6 even
// 7 odd
// 8 even
// 9 odd

