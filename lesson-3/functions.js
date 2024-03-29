// Functions is the main building blocks
// Internaly function is also object
// Also array is object
// Function declaration

function sayHello() {
    console.log("Hello! I'm JavaScript function");
  }
  sayHello(); // function call
  sayHello();
  
  // **************************************************************************************************
  // Local variables are visible only inside function
  function sayHello() {
      // Use let instead of var to avoid external mutation inside your function
    let message = "Hello, I'm JavaScript!"; // local variable
  
    console.log(message);
  }
  sayHello(); // Hello, I'm JavaScript!
  console.log(message); // <-- Error! The variable is local to the function
  
  // Outher variables can be accessed inside and outside
  let userName = "Karl";
  function sayHello() {
    let message = "Hello, " + userName; // local variable
    userName = 'John'
    console.log(message);
  }
  sayHello(); // Hello, Karl
  
  // Outher variables can be "shadowed" if local variable uses same name -
  let userName = "Karl";
  function sayHello() {
    let userName = "John";
    let message = "Hello, " + userName; // local variable
    console.log(message);
  }
  sayHello(); // Hello, John
  console.log(userName)
  // **************************************************************************************************
  // Parameters
  // Define some variables to the function execution
  function sayHello(userName) {
    let message = "Hello, " + userName; // parameter used
    console.log(message);
  }
  sayHello("John"); // Hello, John
  
  // If parameter is not set - his value is "undefined"
  function sayHello(userName) {
    let message = "Hello, " + userName; // parameter used
    console.log(message);
  }
  // in JS script is allow, in Java, Python - not
  sayHello(); // Hello, undefined
  
  
  
  // Parameter can have default value, that will be used in case no parameter passed on function call
  function sayHello(userName = "John") {
    //   if (userName == undefined) {
    //       userName = 'John';
    //   }
    // userName = userName ? username ? 'John'
    let message = "Hello, " + userName; // parameter used
    console.log(message);
  }
  sayHello(); // Hello, John
  
  
  
  // Multiple parameters are allowed:
  function sayHello(greeting = "Hello, ", userName = "John") {
    let message = greeting + userName; // parameter used
    console.log(message);
  }
  sayHello(); // Hello, John
  // Same as
  sayHello(undefined, undefined); // Hello, John
  // Other examples:
  sayHello(undefined, "Karl"); // Hello, Karl
  sayHello("Willkommen, ", "Karl"); // Willkommen, Karl
  sayHello("Willkommen, ", undefined); // Willkommen, John
  
  // RETURN
  function sayHello(greeting = "Hello, ", userName = "John") {
    let message = greeting + userName; // parameter used
    console.log(message);
  }

  let a = sayHello();
  console.log(a); // undefined

  function sayHello(greeting = "Hello, ", userName = "John") {
    let message = greeting + userName; // parameter used
    console.log(message);
    return message;
  }

  let a = sayHello(); // Hello John
  console.log(a); // 

  // You can add any logic to your function

  function sayHello(greeting = "Hello, ", userName = "John") {
      if (greeting){
          return "True";
      } else {
          return 'Else'
      }
  }

// Return value can be anything type
  let a = sayHello();
  console.log(a);

// **************************************************************************************************
// Arrow function 
// Arrow function just shorter form of your function
// Different syntax
let arrowFunc = (parameter1, parameter2) => { // => arrow
    return parameter1 + parameter2;
}

let arrowFunc = (parameter1, parameter2) => parameter1 + parameter2; // the same
let arrowFunc = parameter1 => parameter1 + 1; // in case when you have one parameter

const objectFunction = {
  arrowFunc: (parameter1, parameter2) => {
    console.log(parameter1 + parameter2)
  }
}