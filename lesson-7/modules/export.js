// Most of your projects will have more than one file in structure
// NodeJS allows to import/export data from one file to another using exports/require functions

// Export - process of exposing file data to outside world
// Import - process of consuming file data in other file

// EXPORT

// Use global object - 'exports'
let obj = {someData: "data"}
module.exports.something;
console.log(module.exports) // {}
// the same
module.exports.something1 = "data1";
// OR, the same
exports.something = "data";

// This is just create properties in 'exports' object

// Usual property assignment works as well:
exports["some key"] = "data";

// If you don't attach something to 'exports' object - 
// it won't be able to be imported
function nonExported() {
  console.log("this function is not visible outside of this file");
}
// export function
exports.func = nonExported(); 

// Everything can be exported - functions, objects...
exports.doImportantTask = function(param1, param2) {
  console.log(param1, param2);
  return "task done!";
};

class Human {
  constructor(name, favoriteFood, hoursOfSleep) {
    this.legs = 2;
    this.hands = 2;
    this.head = 1;
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.hoursOfSleep = hoursOfSleep;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
  eat() {
    console.log(`${this.name} is eating ${this.favoriteFood}`);
  }
  sleep() {
    console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
  }
}

// Exporting class
exports.CalssHuman = Human; // you can any export name

// Or created object
exports.bob = new Human("Bob", "Pasta", 7);

// You can dynamically export something depending on if/else or even function body
if (process.arch == "x64") {
  exports.dynamicExport = "working with x64";
} else if (process.arch == "x86") {
  exports.dynamicExport = "working with x86";
}
