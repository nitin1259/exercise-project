"use strict";

const arr = [3, 2, 1, 2, 4, 5, 3];

let obj = {};
let res = [];

console.log(typeof obj);
console.log(typeof res);

for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  if (!obj[item]) obj[item] = 0;
  obj[item] = obj[item] + 1;
}

for (var prop in obj) {
  console.log(prop, obj[prop]);
  if (obj[prop] > 1) {
    res.push(prop);
  }
}

console.log(res);

function dostuf(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
