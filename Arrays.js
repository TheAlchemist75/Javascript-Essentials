//--------------------------------Arrays------------------------------------------

const months = ['January', 'February', 'March', 'April'];

for(let i = 0; i < months.length; i++){
    console.log(months[i]);
}

// 1. Push - Adds the new value to the end of an array
months.push('May'); 
console.log(months); // (5) ['January', 'February', 'March', 'April', 'May']

/* Note: it returns the length of the array when the element is pushed*/
console.log(months.push('May')); // 6

// 2. Pop - Removes the last value
months.pop();
console.log(months);

/* Note: it returns the value of the popped element */
console.log(months.pop()); // May

// 3. Shift - Removes the first value
months.shift();
console.log(months); // (3) ['February', 'March', 'April']

// 4. Unshift - Adds the new value to front of an array
months.unshift('January');
console.log(months); // (4) ['January', 'February', 'March', 'April']

// 5. Splice - It adds/removes values from any position in an array
months.splice(2 , 0, 'June');
/* Format: Position of the value where you want to add, how many values do you want to remove after the position of the value added, What are the values */
console.log(months); // (5) ['January', 'February', 'June', 'March', 'April']

// 6. Slice - Copies a certain parts of array into a newly created array
const lastThreeElements = months.slice(2,5);
console.log(lastThreeElements); // (3) ['June', 'March', 'April']

//--------------------------------For-each------------------------------------------

const names = ['Jon', 'Jenny', 'Johnny'];

names.forEach((name, i) => {
    console.log(i, name);
});

/* 
OR

const logTheName = (name, i) => console.log(i, name);
console.log(logTheName);
*/

// The return vale of forEach is undefined (does not store any value)

const returnVal = names.forEach((name, i) => {
    console.log(i, name);
});

console.log(returnVal); // undefined

/*
When to use it? When you want to do something with each element of an array

When not to use it? When you want to stop or break the loop when some conditions are true
*/

let sum = 0;

const numbers = [23, 34, 45, 56, 67];

numbers.forEach((number) => sum += number );
console.log(sum); // 225