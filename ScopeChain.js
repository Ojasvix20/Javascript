function a(){
    console.log(b);
    c();
    function c(){
        console.log(b);
        
    }
    var x= 69;
}
var b=10;       //variable in global scope.
a();
// console.log(x);     //-- Error: "x is not defined"

//anything in the global scope can be accessed anywhere in the code.
// but if something is defined in the scope of a function, it is accessible inside the function or any function inside the fn ... howeverit cannot be accessed outside the function