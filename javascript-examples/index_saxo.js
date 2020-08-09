"use strict";
function display(data) {
  console.log(data);
}
function printHello() {
  console.log("hello");
}
function blockFor300ms() {
  /* blocks js thread for 300ms with long for loop */
}
setTimeout(printHello, 0);
const futureData = fetch("https://jsonplaceholder.typicode.com/todos/1");
futureData.then(display); // 290
blockFor300ms();
// Which will run first?
console.log("Me first!");

// curring recursive function

var multiply = function (...args) {
  if (args.length === 3) {
    return args[0] * args[1] * args[2];
  } else {
    return function () {
      args.push([].slice.call(arguments).pop());
      return multiply.apply(this, args);
    };
  }
};

var a = multiply(2)(3)(4)(5)(6);
var b = multiply(2)(3)(4)(5);
var c = multiply(2)(3)(4);
console.log(a, b, c);
