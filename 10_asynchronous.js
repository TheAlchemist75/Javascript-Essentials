// Asynchronous Javascript

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

//------------------------------DataFetching----------------------------------------------

const fetchUser = (username, callback) => {
  console.log("Fetching.....");

  setTimeout(() => {
    console.log("We got the user.");
    callback({ username });
  }, 2000);
};

fetchUser("Michael", (user) => {
  console.log(`The name of the user is ${user.username}`); // Fetching....., We got the user., The name of the user is Michael
});

// More detailed - Callback Hell

const fetchUser1 = (username, callback) => {
  console.log("Fetching.....");

  setTimeout(() => {
    console.log("We got the user.");
    callback({ username });
  }, 2000);
};

const fetchUserPhoto = (username, callback) => {
  setTimeout(() => {
    console.log("We got the photos");
    callback(["Photo-1", "Photo-2"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    console.log("We got the photo details");
    callback("Description: Lorem Ipsum....");
  }, 2000);
};

fetchUser1("Michael", (user) => {
  console.log(`The name of the user is ${user.username}`); // Fetching....., We got the user., The name of the user is Michael

  fetchUserPhoto(user.username, (userPhotos) => {
    console.log(`The photos of the user are ${userPhotos}`); // The photos of the user are Photo-1,Photo-2

    fetchPhotoDetails(userPhotos[0], (details) => {
      console.log(`The details of the photo are ${details}`); // The details of the photo are Description: Lorem Ipsum....
    });
  });
});

//------------------------------Promises----------------------------------------------

/* 
Promises - A promise is a result of an asynchronous operation. They are the objects that return the 
successfully data, or the error.

Promise accepts a callback function which has two arguments: resolve and reject.
Resolve is used to display the content if it is executed the data using '.then()' which also accepts a callback function
Reject is used to display the error using '.catch()'.

Modifying the above example with promises
*/

const fetchPerson = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise - We got the user.");
      resolve({ username });
    }, 2000);
  });
};

const fetchUserPhoto1 = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Promise - We got the photos for ${username}`);
      resolve(["Photo-1", "Photo-2"]);
    }, 2000);
  });
};

const fetchPhotoDetails1 = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise - We got the photo details");
      resolve("Description: Lorem Ipsum....");
    }, 2000);
  });
};

fetchPerson("Michael")
  .then((user) => fetchUserPhoto1(user.username)) // Promise - We got the user.
  .then((photos) => fetchPhotoDetails1(photos[0])) // Promise - We got the photos for Michael
  .then((details) => console.log(`The details of the photo are ${details}`)); // Promise - We got the photo details, The details of the photo are Description: Lorem Ipsum....

//------------------------------AsyncAwait----------------------------------------------

/*
Async/Await - It is an addition of promises. It makes the code look synchronous.
It return promises.

Await is used with async function. It pauses the execution of the function until the promise is resolved or rejected.
& it returns the value of the promise.

Lets modify the above example, again-
Since Async await is used on the top of promises only the last section of code will be changed
*/

const displayData = async () => {
  const user = await fetchPerson("Michael");
  const photos = await fetchUserPhoto1(user.username);
  const details = await fetchPhotoDetails1(photos[0]);

  console.log(details);
};

displayData();
