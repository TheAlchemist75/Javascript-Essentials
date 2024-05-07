//------------------------------Part-1-------------------------------------------
//Variables & Datatypes

/*
var : They have function scope or are globally scoped if not declared inside a function.
let : They provide block-level scoping, can reassign or change their values (ES6).
const : They also provide block-level scoping, but their values cannot be reassigned or changed (ES6).
*/

// Backticks (``) : It provides extended functionalities

const name = 'Jane';
const backticks = `Hello, ${name}`;
console.log(backticks) //Output: Hello, Jane

const addition = `${3+5}`;
console.log(addition) //Output: 8

// Note: Always use Strict equality (===)

//------------------------------Part-2-------------------------------------------

//Loops and control functions

/*Truthy and Falsy values

==> Truthy values are those which will run the if statement.
==> Falsy values will execute the else statement. For eg: 0 null '' NaN Undefined false

*/

//------------------------------Part-3-------------------------------------------

//Functions - A block of code that performs tasks


//Function declaration
function cube(num){
    return num * num * num;
}

//Function call - assign a variable to the returned value
const result = cube(7);
console.log(result);


/*
Different ways to write a functions

1. Function declaration (as mentioned above)
function name(params){
    //statements
    //they have access to "this" keyword
}

2. Function expression
const name = function (params){
    //statements
}

3. An arrow function (recommended)
const name = (params) => {
    //statements
}
*/
