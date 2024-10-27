// const crypto = require("node:crypto");

// console.log("Hello World");

// var a = 1078698;
// var b = 20986;

// // pbkdf2 -  Password Base Key Deravtive Function

// // Synchronous Function - Will BLOCK THE MAIN THREAD - DON"T USE IT
// console.log("========");
// crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
// console.log("First Key is Generated");

// setTimeout(() => {
//   console.log("call me right now !!!! ");
// }, 0); // it will only be called once call stack of main thread is empty

// // Async Function
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("Second Key is generated");
// });

// function multiplyFn(x, y) {
//   const result = a * b;
//   return result;
// }

// var c = multiplyFn(a, b);

// console.log("Multiplication result is : ", c);

const crypto = require("node:crypto");

console.log("Hello World");

// var a goes to memory heap. memory is allocated to a and value is 
// stored inside memory heap
//all the code is executed inside global execution context. 
// dont forget that. very very important.

var a = 1078698;
// var b goes to memory heap. memory is allocated to b and value is 
// stored inside memory heap
//all the code is executed inside global execution context. 
// dont forget that. very very important.
var b = 20986;

// pbkdf2- Password Base Key Derivative Function

// Synchronous function -  Will block the main thread. Don't use it. 

console.log("========");
// you any give password. here i am giving password. 
// salt is for encryption
// 50000 is the iteration.  how much more complex you want to make your password
// how much complex should the key be.
// the higher the value. stronger will it be to crack the password. 
// sha512 is the digest. digest means which algorithm you want to use.
// i want to use sha512.
// 50 - how much length of the key should be?

// this crypto is also async function and it is managed by libuv
// whenever you see crypto call it will be uploaded to libuv. 

// libuv also registers the callback and once libuv has generated the key 
// it calls the callback. it throws the callback into callstack and 
// it is executed there.
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is Generated")


setTimeout(() => {
  console.log("call me right now ");
}, 0); // Trust issues with setTimeout
// it will only be called once call stack of
// main thread is empty. main thread is
// where js engine is
// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});
// the memory heap gives memory to this multiplyFn in the memoryspace
function multiplyFn(x, y)
{
    const result = a * b;
    return result;
}

// now func call is made. whenever func call is made js will
// execute a new function execution context in call stack and all the code of the 
// multiplyFn will be executed now. this is a synchronus code 
//js engine doesnt need any help now. js engine can quickly execute it now.
// code is executed inside function execution context and 
// result is calculated and stored inside memory heap
// and when you return result it stores the result inside memory
//and result is stored inside variable c and function execution context
// is moved out of call stack
// now all memory created by result variable is collected by 
// garbage collector
// once funcion execution context pops off garbage collector 
// clears the memory of result variable etc


var c = multiplyFn(a, b);

// console.log is executed by js engine and on console value of c 
// is printed and after that gec is moved out of call stack
console.log("Multiplication result is: ", c);

// now callback function from diff async calls is executed inside 
// call stack
// js engine is stiing idle as it is empty. now file system callback
// func c will be pushed to callstack. now function execution 
// context will be created and now c function will be run line by line
// and it will do console of file data. v8 engine will quickly console.log
// of file data and this func execution context 
// is moved out of call stack.

// now api callback a will be executed. once that is done then setTimeout
// callback is working



