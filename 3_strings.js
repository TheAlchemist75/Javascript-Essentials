//-------------------------String Basics-------------------------------------------

const name = "Shubham";

console.log(name.length); // 7
console.log(name[1]); // h

const firstLetter = name[0];
const lastLetter = name[name.length - 1];
console.log(firstLetter, lastLetter); // S m

const lower = name.toLowerCase();
const upper = name.toUpperCase();
console.log(lower, upper); // shubham SHUBHAM

// Searching for a Substring

const cars = "I love Ferrari, Porsche and Volkswagen";

console.log(cars.indexOf("Porsche")); // 16

console.log(cars.lastIndexOf("Ferrari")); // 7

console.log(cars.includes("Volkswagen")); // true

console.log(cars.startsWith("love")); // false
console.log(cars.startsWith("I")); // true

console.log(cars.endsWith("Volkswagen")); // true

//Getting a substring

const city = "Chemnitz";

console.log(city.slice(0, 3)); // Che

// Split a string
console.log(city.split("")); // ['C', 'h', 'e', 'm', 'n', 'i', 't', 'z']

const city1 = "Chemnitz is the third largest city in Saxony";

console.log(city1.split(" ")); // ['Chemnitz', 'is', 'the', 'third', 'largest', 'city', 'in', 'Saxony']

// Reverse a string

console.log(city.split("").reverse().join("")); // ztinmehC

// Repeat a string

const dogSays = "woof";

console.log(dogSays.repeat(5)); // woofwoofwoofwoofwoof

// Trim the string

const spaceString = "    Hello, World   ";

console.log(spaceString.trim()); // Hello, World
