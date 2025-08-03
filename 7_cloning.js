//------------------------------Shallow Clone----------------------------------------------

// << (a) Cloning Arrays - Spread Operator [Recommended] >>

const numbers = [1, 2, 3, 4];
console.log(...numbers); // 1 2 3 4

// But those numbers are not in array form, to copy it as an array, we can follow these steps

const newNumbers = [...numbers];
console.log(newNumbers); // (4) [1, 2, 3, 4]

// Now lets check the equality

const copiedNumbers = numbers;

console.log(numbers === copiedNumbers); // true
console.log(numbers === newNumbers); // false

/* copiedNumbers points to the same location in the memory where the original number is pointing to.
Therefore, if we change one array, both arrays will be modified, and this is not desirable.

Whereas, newNumbers represent a completely different array.

Now let's push a number into an original array and see if it's updated in the new array
*/

numbers.push(5);

console.log(numbers); // (5) [1, 2, 3, 4, 5]
console.log(copiedNumbers); // (5) [1, 2, 3, 4, 5]
console.log(newNumbers); // (4) [1, 2, 3, 4]

// You can also update the new array without affecting the original one

const updatedNewNumbers = [...newNumbers, 5];
console.log(updatedNewNumbers); // (5) [1, 2, 3, 4, 5]

// << (b) Cloning Arrays - Array.slice() >>

// Exactly similar to spread operator, having the same functionality

const numbers1 = [1, 2, 3, 4];
const copiedNumbers1 = numbers1;
const newNumbers1 = numbers1.slice();

numbers1.push(5);

console.log(numbers1); // (5) [1, 2, 3, 4, 5]
console.log(copiedNumbers1); // (5) [1, 2, 3, 4, 5]
console.log(newNumbers1); // (4) [1, 2, 3, 4]

// If we want to update the new array without affecting the original one

const updatedNewNumbers1 = newNumbers1.concat(5);
console.log(updatedNewNumbers1); // [1, 2, 3, 4, 5]

// But its better to use spread operator if we want to update the new array

// << (c) Cloning Objects - Spread Operator >>

const person = { name: "Alex", age: 20 };
const otherPerson = { ...person };

person.age = 22;

console.log(person); // {name: 'Alex', age: 22}
console.log(otherPerson); // {name: 'Alex', age: 20}

// << (d) Cloning Objects - Object.assign() >>

const person1 = { name: "Alex", age: 20 };
const otherPerson1 = Object.assign({}, person1);

/* Object.assign() takes two properties -
Where it's going to store certain values, in our case its empty object {} &
which value it is going to store, in our case it's the whole person1 object
*/

person1.age = 22;

console.log(person1); // {name: 'Alex', age: 22}
console.log(otherPerson1); // {name: 'Alex', age: 20}

//------------------------------Deep Clone----------------------------------------------

// (a) Spread operator

const person3 = {
  firstName: "Emma",
  car: {
    company: "BMW",
    model: "X5",
    color: "Black",
  },
};

const newPerson3 = { ...person3, car: { ...person3.car } };

newPerson3.firstName = "Matilda";
newPerson3.car.company = "Porsche";

console.log(person3); // firstName: 'Emma', car: {…}} car : {company: 'BMW', model: 'X5', color: 'Black'}
console.log(newPerson3); // {firstName: 'Matilda', car: {…}} car : {company: 'Porsche', model: 'X5', color: 'Black'}

/*
Here, we have to use spread operators on the car object as well, as it has its own reference point.

Achtung! This method only works for two levels. 
*/

// (b) JSON.stringify() OR JSON.parse(JSON.stringify())

const person4 = {
  firstName: "Emma",
  car: {
    company: "BMW",
    model: "X5",
    color: "Black",
  },
};

const newPerson4 = JSON.parse(JSON.stringify(person4));

newPerson4.firstName = "Matilda";
newPerson4.car.company = "Porsche";

console.log(person4); // firstName: 'Emma', car: {…}} car : {company: 'BMW', model: 'X5', color: 'Black'}
console.log(newPerson4); // {firstName: 'Matilda', car: {…}} car : {company: 'Porsche', model: 'X5', color: 'Black'}
