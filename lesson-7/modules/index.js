let something = "data";
// // module.exports.something1 = "data1";
// // exports.something2 = "data2";
// // exports['key'] = 'key';
// // exports.lol = {lol: 'lol'};

// // function nonExported() {
// //     console.log("this function is not visible outside of this file");
// //   }
  
// //   exports.func = nonExported(); 

// //   exports.doImportantTask = function(param1, param2) {
// //     console.log(param1, param2);
// //     return "task done!";
// //   };

//   class Human {
//     constructor(name, favoriteFood, hoursOfSleep) {
//       this.legs = 2;
//       this.hands = 2;
//       this.head = 1;
//       this.name = name;
//       this.favoriteFood = favoriteFood;
//       this.hoursOfSleep = hoursOfSleep;
//     }
//     walk() {
//       console.log(`${this.name} is walking`);
//     }
//     eat() {
//       console.log(`${this.name} is eating ${this.favoriteFood}`);
//     }
//     sleep() {
//       console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
//     }
//   }
  
//   // Exporting class
//   exports.CalssHuman = Human;

//   // Or created object
// exports.bob = new Human("Bob", "Pasta", 7);

// if (process.arch == "x64") {
//   exports.dynamicExport = "working with x64";
// } else if (process.arch == "x86") {
//   exports.dynamicExport = "working with x86";
// }