// Comparsion
// Compare value with something else
// Return boolean
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);
let res = 1 < 2;
console.log(res);

// ####################################################
// Strings are compared letter-by-letter
console.log('Z' > 'A');
console.log('YYY' > 'AAA');
console.log('CCC' > 'ccc');

// Unicode letters order is used

// #####################################################
// If types are different, JS convert the value to number

console.log('2' > 1);
console.log('01' == 1);

console.log(true == 1);
console.log(false == 0);

// #####################################################
// Equal and Strict Equal check

// == cannot differentiate 0 from false, it will try silenty convert value
console.log(0 == false);

// But === will take type of variable into account (value + type)
console.log(0 === false);

// AHTUNG
// CRAZY JS
let a = 0;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); true
console.log(a == b); // true
console.log(Boolean(a) == Boolean(b)); // false

// #####################################################
// Null and Undefined
console.log(null === undefined); // false

// But when using soft equal they convert to boolean 
console.log(null == undefined); // true backward compatibility

// != !==
console.log(2 != '2');
console.log(2 !== '2');

// QUIZ!
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log('2' > '12'); // true or false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == '/n0/'); // false
console.log(null === +'/n0/'); // false
