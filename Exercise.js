//Exercise 01

const guestList = "Our guests are: emma, jacob, isabella, ethan";

//1. Get the length of a string
const length = guestList.length;
console.log(length); // 44

//2. Uppercase the entire string
const upperCase = guestList.toUpperCase();
console.log(upperCase); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

//3. Check whether ETHAN is on the upperCase GuestList
const check = upperCase.includes('ETHAN');
console.log(check); // true

//4. Creating a substring than contains only EMMA, JACOB, ISABELLA and ETHAN
const subString = upperCase. slice(16);
console.log(subString); // EMMA, JACOB, ISABELLA, ETHAN

const subString1 = subString.split(',');
console.log(subString1); // (4) ['EMMA', ' JACOB', ' ISABELLA', ' ETHAN']

//------------------------------------------------------------------------------