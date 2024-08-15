// Asynchronous code

//------------------------------setInterval----------------------------------------------

/* 
setInterval: Displays data after a specific time interval

It accepts two arguments, a callback functions & the  number of milliseconds

setInterval(() => {
  console.log("Hello, World!");
}, 3000);
*/

const myInterval = setInterval(() => console.log("Hello, World!"), 3000);

// To stop the interval, use clearInterval(myInterval);
clearInterval(myInterval);

//------------------------------setTimeout----------------------------------------------

/* 
setInterval: Allows you to wait a certain amount of time before execution
*/

const myInterval1 = setTimeout(() => console.log("Hello, World!"), 3000);

// To stop the timeout, use clearInterval(myInterval);
clearTimeout(myInterval);
