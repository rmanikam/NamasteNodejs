
const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//Synchronous

//find meaning of utf8
fs.readFileSync("./file.txt", "utf8"); // 10ms

console.log("This will execute only after file read");
// this file is small file with less textso it is unnoticeable but it is actually blocking the main thread

// Async function
https.get("https://dummyjson.com/products/1",(res) =>
{
  console.log("Fetched Data Successfully");
})

// Async function
setTimeout(()=>
{
  console.log("SetTimeout called after 5 seconds")
},5000);

// Async function

fs.readFile("./file.txt", "utf8",(err,data)=>
{
  console.log("File Data :", data);
})

function multiplyFunc(x, y)
{
  const result = a * b;
  return result;
}

var c = multiplyFunc(a, b);

console.log("Multiplication result is: ", c);

