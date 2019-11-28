// Conditions

// Run in browser
// Expression in its parentheses and convert the result to boolean
let res = prompt("Do you want to see how condition work?");
if (res == 'yes') {
    alert('Hi, I am your first condition');
}

if ("0") {
    alert( 'Hello' );
  }

// else block allow you to run code block in case when expression is false
let res = prompt("Do you want to see how condition work?");

if (res == 'yes') {
    alert('Hi, I am your first condition');
} else {
    console.log('You answered', res);
}

// else if will run another expression in case first is false
let hour = 20;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

// Ternary operator
let name = 'Karl';
let matchName = name == 'Karl' ? 'Yes it is Karl' : 'No, it is wrong name';
console.log(matchName);
name = 'Not Karl';
matchName = name == 'Karl' ? true : false;
console.log(matchName)
// Do not put a lot in trnaty operator

let a = 123;
let b = typeof(a) == 'undefined' ? 'defined' : a;
console.log(b);

// SWITCH/CASE

let a = 2 + 2;

switch (a) {
    case 3:
        alert('To small');
        break;
    case 4:
        alert('Exactly');
        break;
    case 5:
        alert('To large');
        break;
    default:
        alert('I do not recognize value');
}

// Break is important
// switch execude code for matched case, until brake or end of switch
// Use instad of many if/else construction
// You can remove default

// Grouping same cases

let a = 2 + 2;

switch (a) {
    case 4:
        alert('Exactly');
        break;
    case 3:
    case 5:
            alert('To large');
            break;
    default:
        alert('I do not recognize value');
}

// #################################################
// Type convention

console.log('GOT:', Number(false));
console.log('GOT:', Boolean(0));
console.log('GOT:', typeof String(0));