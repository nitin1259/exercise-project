// function generateFabonaciiSeries(input) {
//   var retarr = [0];

//   let first = 0;
//   let second = 1;

//   if (input <= 1) {
//   } else {
//     retarr.push(second);
//     while (input >= 2) {
//       let temp = first + second;

//       retarr.push(temp);

//       first = second;
//       second = temp;

//       input--;
//     }
//   }
//   return retarr;
// }

// console.log(generateFabonaciiSeries(9));

// string  lenght

// function calCulateStrLength(str) {
//   // var chararr = str.split('');
//   //let count=0;
//   // chararr.forEach(element => {
//   //     count++;
//   // });

//   length = 0;
//   while (str[length] != undefined) {
//     length++;
//   }

//   return length;
// }

// 5 * 5;
// function getsquare(n) {
//   let ret = 0;
//   for (let i = 1; i <= n; i++) {
//     ret += n;
//   }

//   return ret;
// }

for (var i = 1; i < 5; i++) {
  doprint(i);
}

function doprint(j) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}
// ----------- this as been asked in XAMPR
// make even one side and odd one side of array

// var a = [8, 1, 5, 3, 4, 7, 6];
// var a = [4, 2, 1, 5, 8, 3, 4, 7, 6];
// var a = [8, 1, 5, 3, 4, 7, 6];

var a = [2, 4, 6, 8, 1, 10, 3, 12, 7];
console.log(a);

// [2,1,5,3,4,7,6]

// odd i = 1
// even i = 1

// let evenInd = 0;
let oddInd = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    temp = a[oddInd];
    a[oddInd] = a[i];
    a[i] = temp;

    oddInd++;
  }
}

console.log(a);
