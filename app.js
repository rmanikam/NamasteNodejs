
//  require("./xyz");

//  const {x, calculateSum} = require("./calculate/sum");

// import { calculateSum, x } from "./sum.js";

const { calculateSum, calculateMultiply} = require("./calculate");

// var name ="Namaste Node.js";

var a = 20;
var b = 30;

// console.log(name);

// console.log(a+b);

// console.log(global);

// console.log(this); will give output {}

// var x= 100;

// console.log(x);

calculateSum(a,b);
calculateMultiply(a,b);

// console.log(globalThis === global);