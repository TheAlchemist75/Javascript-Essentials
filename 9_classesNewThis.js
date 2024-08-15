//--------------------------------New----------------------------------------------

// The "new" keyword creates a new object

const person = {}; // Standard way
const person1 = new Object(); // Using the "new" keyword

console.log(person, person1); // Output: {} {}

person.firstName = "Miguel";
person1.firstName = "Miguel";

console.log(person, person1); // Output: {firstName: "Miguel"} {firstName: "Miguel"}

/* 
The "new" keyword is not necessary in this case, but it can be useful when creating
objects with a constructor function. (more on this later)

But, new can be used with "Date", since there is no literal syntax for dates
*/

const myDate = new Date("August 15, 2025");

console.log(myDate); // Fri Aug 15 2025 00:00:00 GMT+0200 (Central European Summer Time)

//--------------------------------This----------------------------------------------

/*
The 'this' keyword is used to reference the object that is executing the current function.

Note: We cannot use 'this' keyword with arrow function
*/

function Sentence(words) {
  this.words = words;
  console.log(this);
}

const string = new Sentence("Hello, world!"); // Sentence {words: 'Hello, world!'}

// Another example

const person2 = {
  name: "John",
  getName() {
    console.log(this);
  },
};

person2.getName(); // {name: 'John', getName: ƒ}

// Example 2

function Car(brand, color, wheels) {
  this.brand = brand;
  this.color = color;
  this.wheels = wheels;

  console.log(this);
}

const bmwCar = new Car("BMW", "Red", 4); // Car {brand: 'BMW', color: 'Red', wheels: 4}
const fordCar = new Car("Ford", "Blue", 4); // Car {brand: 'Ford', color: 'Blue', wheels: 4}

//--------------------------------Classes----------------------------------------------

// A class is a schema to store objects

class user {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

const user1 = new user("Alex", 27, true);
console.log(user1); // user {name: 'Alex', age: 27, isWorking: true}

/*
Normally, we write objects as

const user = {
name: 'Alex',
age: 27,
isWorking: true,
}

In most cases this approach would work, but when you need multiple values with a fixed
specified schema, then we can use classes to reduce redundancy and clean code.

*/

const createPerson = (name, age, isWorking) => {
  const userSchema = {
    name, // substituting name: name to just name, works same
    age,
    isWorking,
  };

  return userSchema;
};

const user3 = createPerson("Bryan", 27, true);
console.log(user3); // {name: 'Bryan', age: 27, isWorking: true}
