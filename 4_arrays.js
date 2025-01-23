//--------------------------------Arrays------------------------------------------

const months = ["January", "February", "March", "April"];

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// 1. Push - Adds the new value to the end of an array
months.push("May");
console.log(months); // (5) ['January', 'February', 'March', 'April', 'May']

/* Note: it returns the length of the array when the element is pushed*/
console.log(months.push("May")); // 6

// 2. Pop - Removes the last value
months.pop();
console.log(months);

/* Note: it returns the value of the popped element */
console.log(months.pop()); // May

// 3. Shift - Removes the first value
months.shift();
console.log(months); // (3) ['February', 'March', 'April']

// 4. Unshift - Adds the new value to front of an array
months.unshift("January");
console.log(months); // (4) ['January', 'February', 'March', 'April']

// 5. Splice - It adds/removes values from any position in an array
months.splice(2, 0, "June");
/* Format: Position of the value where you want to add, how many values do you want to remove after the position of the value added, What are the values */
console.log(months); // (5) ['January', 'February', 'June', 'March', 'April']

// 6. Slice - Copies a certain parts of array into a newly created array
const lastThreeElements = months.slice(2, 5);
console.log(lastThreeElements); // (3) ['June', 'March', 'April']

// 7. Sort - Sorts words alphabetically, it mutates the original array
console.log(months.sort()); // (5) ['April', 'February', 'January', 'June', 'March']

const numbers2 = [6, 16, 9, 39, 4, 27, 3, 5];
console.log(numbers2.sort()); // (8) [16, 27, 3, 39, 4, 5, 6, 9]

/* 
sort doesn't work properly with numbers, it sorts depending on the first integer in the number i.e 2. 34, 5, 67, 8 

=> to sort numbers in ascending order - numbers2.sort((a, b) => a - b);
=> to sort numbers in descending order - numbers2.sort((a, b) => b - a);
*/

console.log(numbers2.sort((a, b) => a - b)); // (8) [3, 4, 5, 6, 9, 16, 27, 39]

console.log(numbers2.sort((a, b) => b - a)); // (8) [39, 27, 16, 9, 6, 5, 4, 3]

//--------------------------------For-each------------------------------------------

const names = ["Jon", "Jenny", "Johnny"];

names.forEach((name, i) => {
  console.log(i, name);
});

// The return vale of forEach is undefined (does not store any value)

const returnVal = names.forEach((name, i) => {
  console.log(i, name);
});

console.log(returnVal); // undefined

/*
When to use it? When you want to do something with each element of an array & 
You don’t need to return or collect any data from the array.

It doesn't create a new array

When not to use it? When you want to stop or break the loop when some conditions are true
*/

let sum = 0;

const numbers = [23, 34, 45, 56, 67];

numbers.forEach((number) => (sum += number));
console.log(sum); // 225

//--------------------------------Maps---------------------------------------------

// It creates a new array i.e it does not mutates the original array

/*
When to use it? When you  need to create a new array where each element is the result of applying 
a function to the elements of the original array &
you need to transform data or perform a calculation that results in a new array.
*/

const inventory = [
  { item: "Eggs", price: 70 },
  { item: "Bread", price: 60 },
  { item: "Cheese", price: 20 },
];

const items = inventory.map((inv) => inv.item);
const prices = inventory.map((inv) => inv.price);

console.log(items); // (3) ['Eggs', 'Bread', 'Cheese']
console.log(prices); // (3) [70, 60, 20]

//-------------------------------Filter---------------------------------------------

// It creates a new array i.e it does not mutates the original array

/*
When to use it? When you want to create a new array containing only the elements that 
pass a certain test or condition.

When you need to select a subset of elements from an array that meet specific criteria &
you want to remove elements that don’t match a condition.
*/

const integers = [-30, 0, 40, 69, -96];

const positive = integers.filter((integer) => integer >= 0);
console.log(positive); // (3) [0, 40, 69]

// If we return true, it will keep the value

const employeesData = [
  { name: "Alan", hours: 7 },
  { name: "Bryan", hours: 9 },
  { name: "Dylan", hours: 10 },
];

const overtime = employeesData.filter((employee) => employee.hours >= 8);
console.log(overtime);

const empNames = overtime.map((employee) => employee.name);
console.log(empNames); // (2) ['Bryan', 'Dylan']

empNames.forEach((name) =>
  console.log(`${name} received the reward for overtime`)
);

/* 
Bryan received the reward for overtime 
Dylan received the reward for overtime
*/

//--------------------------------Find----------------------------------------------

// Finds the value and returns the first value that satisfies the condition

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

const num = numbers1.find((number) => number > 5);
console.log(num); // 6

// It is similar to filters, but in find, it will return the first value that satisfy the condition and then stops executing.

const names1 = ["Alan", "Bryan", "Brandon", "Calvin"];

const nameWithB = names1.find((name) => name.startsWith("B"));
console.log(nameWithB); // Bryan

//------------------------------Include----------------------------------------------

// Determines if the value is included or not (It returns a Boolean value)

const bookshelf = [
  "The Song of Ice and Fire",
  "The Last Wish",
  "Metro 2033",
  "The Godfather",
];

if (bookshelf.includes("The Last Wish")) {
  console.log("Ayy, I see you are a man of culture as well!");
} else {
  console.log("Hmm, Never heard of it, maybe I will add it into my list later.");
}

// No need to provide condition here, since includes already returns boolean values.

//----------------------------Some & Every----------------------------------------------

const integer2 = [3, 5, 7, 9];

const greaterThan5 = (number) => number > 3;

// 'some' returns true if at least one element passes the test
console.log(integer2.some(greaterThan5)); // true

// 'every' returns true only if all the elements pass the test
console.log(integer2.every(greaterThan5)); // false

//------------------------------Reduce----------------------------------------------

// Whenever we have multiple values and have to sum them up, we can use reduce (Alternative of ForEach)

/*
Reduce takes in two parameters, a callback function and an initial value (accumulator)

arrays.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, accumulator)

Here, accumulator is the initial value &
currentValue is the value in the array being executed in the loop
*/

const numbers3 = [1, 2, 3, 4, 5];

const sum1 = numbers3.reduce((acc, val) => acc + val, 0);
console.log(sum1); // 15

/*
acc = 0, val = 1 => 0 + 1 === 1 (acc)
acc = 1, val = 2 => 1 + 2 === 3 (acc)
acc = 3, val = 3 => 3 + 3 === 6 (acc)
acc = 6, val = 4 => 6 + 4 === 10 (acc)
acc = 10, val = 5 => 10 + 5 === 15
*/

const mul = numbers3.reduce((acc, val) => acc * val, 1);
console.log(mul); // 120
