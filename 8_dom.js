// DOM basics [Must be run in browser's console itself]

// (a) Finding elements by ID

/*
<body>
    <h1>Javascript Essentials!</h1>

    <input />
    <h3 id="element-below-input">Working on some tests here....</h3>
    <script src="8_dom.js"></script>
  </body>
*/

const el = document.getElementById("element-below-input");
console.log(el); // <h3 id="element-below-input">Working on some tests here....</h3>

// (b) Finding elements by tag names

/*
<body>
    <h1>Javascript Essentials!</h1>

    <input />
    <h3 id="element-below-input">Working on some tests here....</h3>
    <h3 id="element-below-input">Working on some tests here....</h3>
    <script src="8_dom.js"></script>
  </body>
*/

const el1 = document.getElementsByTagName("h3");
console.log(el1); // HTMLCollection(2)

// (b) Finding elements by class names

/*
<body>
    <h1>Javascript Essentials!</h1>

    <input />
    <h3 class="test" id="element-below-input">Working on some tests here....</h3>
    <h3 class="test" id="element-below-input">Working on some tests here....</h3>
    <h3 id="element-below-input">Working on some tests here....</h3>
    <script src="8_dom.js"></script>
  </body>
 */

const el2 = document.getElementsByClassName("test");
console.log(el2); // HTMLCollection(2)

// (b) Finding elements by CSS selectors

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Javascript Essentials!</h1>

    <input />
    <h3 class="test" id="element-below-input">
      Working on some tests here....
    </h3>
    <h2 class="test" id="element-below-input">
      Working on some tests here....
    </h2>
    <h2 class="test" id="element-below-input">
      Working on some tests here....
    </h2>
    <script src="8_dom.js"></script>
  </body>
</html>
*/

const el3 = document.querySelectorAll("h2.test");
console.log(el3); // NodeList(2)

/*
We can use querySelector to replace all the methods we learned above.

Also, querySelector => target only one element
querySelectorAll => target multiple elements
*/

console.log(document.querySelectorAll(".test")); // NodeList(3)
console.log(document.querySelector("#element-below-input")); // <h3 class="test" id="element-below-input">Working on some tests here....</h3>
console.log(document.querySelectorAll("h2")); // NodeList(2)

// Understanding querySelector in detail

const el4 = document.querySelector("h3");

el4; // <h3 class="test" id="element-below-input">Working on some tests here....</h3>

el4.classList; // DOMTokenList ['test', value: 'test']

el4.className; // 'test'

el4.id; // 'element-below-input'

el4.innerHTML; // '\n      Working on some tests here....\n    '

// Buttons

const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Oh hell nah fam, you had just one job CJ");
});

// addEventListener accepts two things - type and callback function

button.getBoundingClientRect(); // DOMRect {x: 8, y: 255.3125, width: 206.359375, height: 21, top: 255.3125, …}

//------------------------------MenuClick----------------------------------------------

const menuClicked = (currEl) => {
  const menuItems = document.getElementsByClassName("menu-item");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }

  currEl.classList.add("active");
};
