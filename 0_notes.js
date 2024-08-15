//------------------------------Part-1-------------------------------------------
//Variables & Datatypes

/*
var : They have function scope or are globally scoped if not declared inside a function.
let : They provide block-level scoping, can reassign or change their values (ES6).
const : They also provide block-level scoping, but their values cannot be reassigned or changed (ES6).
*/

// Backticks (``) : It provides extended functionalities

const name = "Jane";
const backticks = `Hello, ${name}`;
console.log(backticks); //Output: Hello, Jane

const addition = `${3 + 5}`;
console.log(addition); //Output: 8

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
function cube(num) {
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

/*
=> Every function returns undefined until specified
=> If there are two returns statement in the same function, only the first
one is going to be executed and then it will exit the function.
*/

//------------------------------Part-4-------------------------------------------

// Hoisting - calling a variable before declaring

console.log(age);

/*
If we console log "age" without declaring it, ReferenceError will occur
(age is not defined)
*/

var age = 20;

/*
Now, if we declare age after calling it, that Error will get replaced by "Undefined".

It actually works like this:
*/

var age; //age variable is hoisted up
console.log(age);
age = 20;

//It is a good practice to always declare variable at the top of the scope

//------------------------------Part-5-------------------------------------------

// Closure -  when a function remembers the variables around it even when that function is executed elsewhere.

function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let myFunction = outerFunction();
myFunction(); // Output: I am from outerFunction

/*
In this example, innerFunction is a closure. Even though it's executed outside of outerFunction, 
it still remembers the outerVariable from outerFunction. 

So, when myFunction is called, it can still access and use outerVariable.

Think of it as if innerFunction has a little piece of memory from outerFunction stored with it, 
allowing it to access the variables it needs, even when it's not directly inside outerFunction.
*/

//------------------------------Part-5-------------------------------------------

/*
Difference between arrays forEach and array map is:

=> forEach does not store any values (its return value is undefined),
=> it allows a callback function that will allow us to change the entire array.

=> Map method allocates memory in order to store and return values,
=> it returns a new array while leaving the original array in its original state.
*/

//------------------------------Part-6-------------------------------------------

/*
Asynchronous vs Synchronous:

Synchronous is the one in which the code is executed line by line, sequentially &
their tasks are completed instantly. 
There is no time delay in the completion of the tasks for those lines of code
*/

const functionOne = () => {
  console.log("Function one is called");

  functionTwo();

  console.log("Function one is called for the second time");
};

const functionTwo = () => {
  console.log("Function two is called");
};

functionOne(); // Function one is called, Function two is called, Function one is called for the second

/*
Asynchronous will execute the code that requires waiting time in the background while continuing
with the rest of the code execution.

Lets modify the above code for better understanding
*/

const functionThree = () => {
  console.log("Function three is called");

  functionFour();

  console.log("Function three is called for the second time");
};

const functionFour = () => {
  setTimeout(() => {
    console.log("Function four is called");
  }, 2000); // 2s waiting period
};

functionThree(); // Function three is called, Function three is called for the second time, Function four is called
