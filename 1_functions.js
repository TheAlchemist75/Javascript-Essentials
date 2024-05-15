//----------------------------Functions-------------------------------------------

function test (){
    return true;
    return false;
}

const result = test();
console.log(result);

//Only the first return statement will be executed

//----------------------Arrow - Functions------------------------------------------

const square = (number) => {
    return number*number;
}

//OR

const square1 = (number) => number*number;

console.log(result1 = square(10));
console.log(result2 = square1(10));

//Same result, you can also remove brackets () if there is only one parameter
//const square1 = number => number*number;
