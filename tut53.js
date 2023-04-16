console.log(" this is tutoreal 53 ");

//function greet(name){                 //  reusibility - avoiding console.log again N again
    function greet(name, greetText = " Greeting from JavaScript "){   //its a default
        let name1 = " Name1 ";           // the name1 does'nt affect on Name1. its Scoping is local level
        console.log( greetText + " " + name );
        console.log( name + " is a good boy ");
}

//return function
function sum(a, b, c){
    let d = a + b + c;
    return d;
}

let name1 = "Harry";  // its Scoping is Global level, everyone can use this.
let name2 = "Shubham";
let name3 = "Rohan";
let name4 = "Sagar";

let greetText = " Good Morning ";

greet(name1, greetText);
greet(name2, greetText);
greet(name3);               // if we not write anything, it print default thing.

//let returnVal = greet(name4);
//console.log(returnVal);  // it gives us undefined, cause it never return anything with herself.

let returnVal = sum(1, 2, 3);
console.log(returnVal);

// consol.log(name + " is a goog boy");
// consol.log(name1 + " is a goog boy");
// consol.log(name2 + " is a goog boy");
// consol.log(name3 + " is a goog boy");

//thats Why we not using Var, Use (let) and (const). cause, their scope are very clear.
// If its in any function or block, or in ifelse or in function, the scope of let is block level scope.
// And whenever we write (let) function , then its Global variable.

