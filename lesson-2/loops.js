// // Loops
console.log(i);
console.log(i);
console.log(i);
console.log(i);
console.log(i);
// Do not repeat an actions

// while - First check, then run
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
    // do not forget increment variable
}

// // do while - First run then check
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

// Yor loop will be execute at list ones
res = null;
do {
    res = prompt('Do you want more alerts?');
} while (res !== 'STOP');

// For loop
// initial expression call loop let -first part, condition - second part, increment expression - third part
for (let i = 0; i < 3; i++) {
    // statement
    console.log('Iteration:', i);
}

// continue, skip one iteration
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        continue;
    }
    console.log(i);
}

// break loop
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        break;
    }
    console.log(i);
}