// 1. Creation
let stack = ["HTML", "CSS", "JS"];

// 2. Accessing elements
console.log(stack[0]); // "HTML"

// 3. Modifying
stack.push("React"); // Adds to end
stack.pop();         // Removes from end
stack.unshift("Git"); // Adds to start
stack.shift();        // Removes from start

// 4. Searching
console.log(stack.indexOf("CSS")); // 1
console.log(stack.includes("Python")); // false

// Creates a buffer for 8 integers (8-bit signed)
let buffer = new Int8Array(8);

buffer[0] = 10;
buffer[1] = 255; // Overflow! Int8 only fits -128 to 127.
console.log(buffer); // Int8Array(8) [10, -1, 0, 0, ...]

const user = {
    id: 1,
    name: "Gemini",
    isAdmin: true
};

// 1. JSON.stringify() -> Converts JS Object to JSON String (for sending to server)
const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: '{"id":1,"name":"Gemini","isAdmin":true}'

// 2. JSON.parse() -> Converts JSON String back to JS Object (for using in code)
const receivedData = '{"id":2, "name":"User2"}';
const userObj = JSON.parse(receivedData);
console.log(userObj.name); // "User2"

const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function() {};

// Setting values
myMap.set(keyString, "Value associated with string");
myMap.set(keyObj, "Value associated with object");
myMap.set(keyFunc, "Value associated with function");

// Getting values
console.log(myMap.size); // 3
console.log(myMap.get(keyObj)); // "Value associated with object"

const mySet = new Set();

mySet.add(1);
mySet.add(3);
mySet.add(5);
mySet.add(5); // Ignored! 5 is already there.

console.log(mySet); // Set(2) { 1, 5 }

// TRICK: Remove duplicates from an array
const numbers = [1, 2, 2, 3, 3, 3];
const uniqueNumbers = [...new Set(numbers)]; // [1, 2, 3]

let user1 = { name: "John" };

const weakMap = new WeakMap();
weakMap.set(user1, "Secret Data");

// If we delete the user object...
user1 = null;

// ...the "Secret Data" inside weakMap is automatically cleaned up from memory.
// You cannot iterate over a WeakMap (no .forEach, no .size).