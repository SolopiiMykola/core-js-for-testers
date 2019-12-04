// Property value shorthand
// In real code we often use existing variables as values for property names.

const name = prompt("Whats your name?");
const age = prompt("Whats your age?");

const user = {
  name: name,
  age: age
};
// If variable and key names are same - you can use:
const user2 = {
  name,
  age
};
console.log("Regular:", user);
console.log("Shortened:", user2);

// You can do any math
const user3 = {
    name: 'Myko' + 'la',
    age: 20 + 20
  };
  console.log("Regular:", user);
  console.log("Shortened:", user2);
  console.log("Math:", user3);

// You can mix together as well
const user3 = {
  name,
  age,
  country: "Ukraine"
};

// Can also use ternary operator
const user3 = {
    name,
    age,
    country: "Ukraine",
    key: someCondition ? true : false
  };

// **************************************************************************************************
// Existence check

// Accessing a non-existing property just returns undefined
const user4 = {
  name: "Ivan"
};
console.log(user4.age); // undefined

// You can use this for good to check if property has value:
console.log(user4.age !== undefined); // false means "no such property"

// BUT there are might be problems when an object property exists, but stores undefined:
let obj = {
  test: undefined
};
console.log(obj.test !== undefined); //  undefined, no property?
console.log("test" in obj); // true, the property does exist!

// undefined is usually not assigned. You should use null for “unknown” or “empty” values.

// **************************************************************************************************
// The “for…in” loop - walk over all keys of an object

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

// Order of your keys is not alway the same


for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}

let keys = Object.keys(user);
console.log(keys);
let values = Object.values(user);
console.log(values);


// **************************************************************************************************
// Copying by reference

// One of the main differences with primitive values, that objects are not copied:
const originalObj = {
  name: "Karl",
  country: "Ukraine"
};

const newObj = originalObj; // this will NOT copy object, it will just copy the reference in yout memory
console.log("before update");
console.log(originalObj.country);
console.log(newObj.country);
originalObj.country = "UK";
console.log("after update");
console.log(originalObj.country);
console.log(newObj.country); // country is updated for both variables

// But primitives are copied
let originalStr = "Ukraine";
let newStr = originalStr;
console.log("before variable update");
console.log(originalStr);
console.log(newStr);
originalStr = "USA";
console.log("after variable update");
console.log(originalStr);
console.log(newStr);

// **************************************************************************************************
// equality == and strict equality === operators for objects work exactly the same.

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

let a = {};
let b = {}; // two independent objects
console.log(a == b); // false
console.log(a === b); // false

// **************************************************************************************************
// As you might noticed - const does not prevent objects values to be changed

const user = {
  name: "John"
};
user.age = 25; // OK, no error here
console.log(user.age); // 25

// But prevents to re-assign:
const user = {
  name: "John"
};
// Error (can't reassign user)
user = {
  name: "Peter"
};


// **************************************************************************************************
// Copying object harder way:
const user = {
  name: "John",
  age: 30
};
const clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
console.log(user.name); // still John in the original object

// Copying object simple way:
const user = {
  name: "John",
  age: 30
};
const clone = Object.assign({}, user)
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
console.log(user.name); // still John in the original object

// Object.assign merges keys/values from objects from right to left:
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 into permissions2, and then from permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }
console.log(user);

// Spread Operator allow you to combine objects by key
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
const userNew = {...permissions1, ...permissions2, ...user};
console.log(user);
console.log(userNew);


