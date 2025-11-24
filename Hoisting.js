getName(); // fn is called - no error

console.log(x); //undefined

console.log(getName); //copy of fn shows

console.log(getName1); //yields error
getName1(); //yields error

var x = 7; //if we remove this declaration, line 3 will cause error- rather than undefined it will be error of not defined.

//in js when a variable is intialized- it is assigned undefined before any value is assigned.

function getName() {
  console.log("Namaste javascript");
}

// but the same doesnt apply to arrow fns

var getName1 = () => {
  console.log("Namaste js!");
}; // treated like a variable in execution context

//in execution context - variable = undefined & function = code of fn itself {...}
//arrow fn work like variables

// same for variable fn:

console.log(hello());

var hello = function () {
  console.log("hello world");
};
