Homework:

1) 
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



2)
We have an object storing salaries of our team:

let salaries = {
  John: 250,
  Ann: 250,
  Peter: 500
}
Write the function to sum all salaries and return it. Should be 1000 in the example above.

If salaries is empty, then the result must be 0.



2.1)
We have an object storing salaries of our team:

let salaries = {
  John: 250,
  Ann: 250,
  Peter: 500
}
Write the function that returns name and value of employer that gets biggest salary


3)
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.





## Advanced topics to learn

### Rest parameters and spread operator
https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281

### Arguments variable
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

### Function declarations vs function expressions
https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/


## Materials:
### Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

### Objects basics (+ short "this" introduction)
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics