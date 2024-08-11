/*
Javascript differentiates data types on:

Primitive values (Number, String, Boolean ...) &
Complex values (Objects, Arrays)
*/

// If we try to copy primitive values, the cloned value is not updated to the modified value

let x = 9;
let y = x; // 9

x = 6;

console.log(x); // 6
console.log(y); // 9

// But in case of complex values, the cloned value is updated to the modified value

const germanCars = ['BMW', 'Porsche'];
const otherGermanCars = germanCars;

germanCars.push('Volkswagen');

console.log(germanCars); // ['BMW', 'Porsche', 'Volkswagen']
console.log(otherGermanCars); // ['BMW', 'Porsche', 'Volkswagen']

/*
Why does it happen?

=> Primitive data types copies and stores the value whereas,
=> Non-primitive data types also points to the location, where it is stored (it copies reference instead of the values)

germanCars and otherGermanCars points to the same location in the memory.
*/

const person = {name: 'Jon'};
const otherPerson = {name: 'Jon'};

console.log(person === otherPerson); // false

/*
But why?

Although the person and the otherPerson contains identical objects, 
they still point to two different objects stored in two different memory
*/

const person1 = {name: 'Jon'};
const otherPerson1 = person1;

console.log(person1 === otherPerson1); // true

// Because they point to the same location