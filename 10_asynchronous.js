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
    callback(["Description: Lorem Ipsum...."]);
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
