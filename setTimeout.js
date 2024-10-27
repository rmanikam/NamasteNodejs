console.log("Hello World");

var a = 1078698;
var b = 20986;

// This callback will only be pushed to 
//call stack in v8 once the call stack 
// is empty
setTimeout(() => {
  console.log("call me right now ");
}, 0); // Trust issues with setTimeout

// when you say you want to run this code
// after 0ms does it actually run after 
// 0 ms. ans is no. it only runs after 0ms  
// when the call stack is empty
// ther is terms and conditions on 
// setTimeout*. that is why there are 
// Trust issues with setTimeout


setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);