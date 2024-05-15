// An object is an unordered collection of related data in the form of key & value pairs

const person = {
    fname: 'Alex',
}

// We can access the properties from the object by using 'Dot Notation'
console.log(person.fname); // Alex

person.car = {company: 'Ford', model: 'Focus'};
console.log(person); // {fname: 'Alex', car: {…}}
console.log(person.car.company); // Ford

// We can also write this as 
console.log(person['fname']); // Alex

// We can use Square bracket notation to access the properties dynamically

person.age = 25;
const property = 'age';
console.log(person[property]); //Alex

// But we cannot use person.property in this case, because it will look for property (literally) in the person object.

// we can also use square notation if the property does not have a valid variable name

const invalidVar = {
    "this-is-a-key-with-dashes": true,
}

/* we have to use "" if the variable contains multiple letters.

In this case we cannot do; 
console.log(this-is-a-key-with-dashes)

Instead, we can use;
*/

console.log(invalidVar['this-is-a-key-with-dashes']); //true

//------------------------------Methods----------------------------------------------

const dog = {
    name: 'Rocky',
    age: 2,
    bark: () => {
        console.log('Woof Woof');
    },
    listAllProperties: function() {
        console.log(this.name, this.age); // this keyword
    }
}

dog.bark(); // Woof Woof
console.log(dog.age); // 2
dog.listAllProperties(); // Rocky 2

// Static Object Methods

const employee = {
    Boss: "Henry",
    CEO: "David",
    Manager: "Anna"
};

//Keys - It creates an array containing the keys of an object
const positions = Object.keys(employee);
console.log(positions); // (3) ['Boss', 'CEO', 'Manager']

//Values - It creates an array containing the values of an object
const val = Object.values(employee);
console.log(val); // (3) ['Henry', 'David', 'Anna']

//Entries - It creates a nested array of key-value pairs
const entry = Object.entries(employee); 
console.log(entry); // 0:(2) ['Boss', 'Henry'] 1:(2) ['CEO', 'David'] 2:(2) ['Manager', 'Anna'] length: 3

//Looping through the result
entry.forEach(entry => {
    let key = entry[0];
    let value = entry[1]

    console.log(`${key} : ${value}`); // Boss : Henry CEO : David Manager : Anna
})

//Freeze - It freezes the value i.e we cannot modify it later
const admin = Object.freeze(employee);

employee.Boss = 'Danielle';
console.log(employee); // {Boss: 'Henry', CEO: 'David', Manager: 'Anna'}

// The data is not changed

//Seal - It allows the modification of the values but cannot add new values
const sealed = Object.seal(employee);

employee.Manager= 'Austin';
employee.Secretary = 'Matilda';

console.log(employee); // {Boss: 'Henry', CEO: 'David', Manager: 'Austin'}

// The data is modified but we cannot add new data.

// P.S : Comment freeze code snippet before using seal code snippet.