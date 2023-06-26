// Strict Mode

// strict mode can be activated in js
// makes it easier to write secure js

"use strict"; // activates strict for entire script file

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// intentional bug forgetting the 's' with strict mode on it does not work
// with strict more off it does work
// if (hasDriversLicense) console.log(`I can drive :)`);

// Functions

// what are functions?
// simply a piece of code that we can reuse over and over again
// like a variable for whole chunks of code

// function logger() {
// within the curly braces is the function body
// code that will be run when the function is run
// console.log(`my name is joshua`);
// in theory we have to use this line of code multiple times that's why we put it in a function
// }

// invoking, calling, or running the function
// logger();
// Expected output: `my name is joshua`
// can run as many times as we want
// logger();
// logger();
// logger();

// function can reuse a piece of code but can also return/recieve date
// think of functions like a machine
// in --> does something (body) --> out

// parameters: are like variables that are specific only to this function
// will be defined once we call the function
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples, and ${oranges} oranges.`;
//   return juice; // return any value from the function
// }

// called processor function 5, 0
// printed 5 0 into the console
// result of calling the function we have to save it by capturing it into a variable
// then we log the console
// const appleJuice = fruitProcessor(5, 0);
// first parameter = 5, second parameter = 0 --> also known as 'arguements'
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0)); // did not capture the variable

// const appleOrangeJuice = fruitProcessor(2, 0);
// console.log(appleOrangeJuice);

// function allow us to write more maintanable code
// very important principle for writing clean code
// don't repeat yourself --> keep code dry

// const num = Number("23");
// number is a function
// capture the stringed 23 as a variable num

// Lecture: Functions

// function describeCountry(country, population, capitalCity) {
// 'Finland has 6 million people and its capital city is Helsinki'
// return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// const unitedStates = describeCountry(
//   `United States`,
//   `333,000,000`,
//   `Washington DC`
// );
// console.log(unitedStates);

// Function Declarations vs Expressions

// function declarations --> a keyword to declare a function like a variable

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// function are not types but are values
// if it's a value we can store it into a variable

// Arrow Functions
// special form of function expression that is shorter therefor faster to write
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge1, calcAge2, calcAge3);
// no curly braces
// returns implicitly

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

// JavaScript Fundamentals Part 2
// Lecture Functions

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and its capital is ${capitalCity}`;
// }

// const countryTest = describeCountry(`United States`, `10 million`, `DC`);
// console.log(countryTest);

// Lecture: Function Declarations vs Expressions

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageTest = percentageOfWorld1(`1441000000`);
// console.log(percentageTest);

// expected output about 18% it works

// const percentageTest2 = function (population) {
//   return (population / 7900) * 100;
// };

// Lecture: Arrow Functions

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// do not need curly braces or a return... the return is implicit
// do not forget the return is implicit in an arrow function
// console.log(`----`); seperation for the console just a visual effect
// const percentageTest3 = percentageOfWorld3(`1441000000`);
// console.log(percentageTest3);

// Function Calling other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// }

// describePopulation("Portugal", 10);
// describePopulation("China", 1441);

// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   //   const age = 2037 - birthYear;
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement; // return keyword it exits the function immediatley
//   } else {
//     return -1;
//   }
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1993, `Joshua`));
// console.log(yearsUntilRetirement(1970, `Phil`));

// Coding Challenge # 1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(scoreDolphins, scoreKoalas) {
//   const avgDolphins = scoreDolphins;
//   const avgKoalas = scoreKoalas;

//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}`);
//   }

// else if was not working in the given terminal for udemy but using else if here would be ideal
// the test passed regardless

//   if (avgDolphins > avgKoalas) {
//     console.log(`Koalas win ${avgKoalas} to ${avgDolphins}`);
//   } else {
//     console.log(`No team wins`);
//   }
// }

// Introduction to Arrays

// const friend1 = "Mike";
// const friend2 = "Steven";
// const friend3 = "Peter";

// imagine if we had ten friend to group together this isn't very efficent this is why we have arrays
// two most important data structures are arrays and object

// const friends = ["Mike", "Steven", "Peter"];
// console.log(friends);

// another way to write an array
// can hold as many values as we want, values of any type
// most often we are going to see brackets
// bracket = literal syntax

// const years = new Array(1991, 1984, 2008, 2020);
// new key word
// console.log(years);

// console.log(friends[0]); // Expected output: `Mike`
// // arrays are zero indexed so 0, 1, 2... so on and so forth

// console.log(friends.length); // Expected output: 3;
// // length property
// // amount of elements in the array & it is not zero based
// // gives us amount of elements in the array

// console.log(friends[friends.length - 1]); // last element
// console.log(friends[2]); // Peter

// friends[2] = "Lizzie"; // re-assign element [2] in friends array to lizzie
// console.log(friends[2]); // Lizzie

// const firstName = `Joshua`;
// const joshua = [firstName, "Alvarado", 2037 - 1993, "teacher", friends];
// console.log(joshua);

// // Excercise

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// // cannot do operations in arrays

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// Basic Array Operations (Methods)

// Add Elements

// const friends = ["Mike", "Josh", "Lizzie"];
// friends.push("Tyler");
// // .push pushes Tyler to the end of the array
// // Expected output: Mike, Josh, Lizzie, Tyler
// console.log(friends);
// friends.unshift("John");
// // .unshift adds to the front of the array
// // Expcted output: John, Mike, Josh, Lizzie, Tyler
// console.log(friends);

// // Remove Elements
// const popped = friends.pop();
// // removes from the end of the array
// // Expected output: John, Mike, Josh, Lizzie
// console.log(friends);
// // can also return removed elements
// console.log(popped);
// // Expected reutrn: Tyler
// friends.shift();
// // removes from the front of the array
// // Expected reutrn: Mike, Josh, Lizzie
// console.log(friends);
// console.log(friends.indexOf(`Josh`));
// // Expected output: 1
// // - 1 if an element is not in the array
// console.log(friends.includes(`Josh`)); // true
// console.log(friends.includes(`Ace`)); // false

// Challenge #2

// function calcTip(tip) {
//   if (tip >= 50 && tip <= 300) {
//     return tip * 0.15;
//   } else {
//     return tip * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Code passed all of the test

// Introduction to Objects
// in objects you define key value pairs

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Mike", "Peter", "Steven"],
// };

// in arrays you cannot name these keys or properties
// object Jonas has five properties
// maybe the most fundamental concept in the jS language
// object literal syntax
// in objects the order of the elements does not matter
// arrays for more ordered data and objects for more unstructured data
// or objects we want to name

// Dot vs. Bracket Notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Mike", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName); // dot notation for looking through an object
// console.log(jonas["lastName"]); // bracket notation

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// can put any expression inside of the brackets

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(jonas[interestedIn]);
// expression between brackets will get evaluated vs dot being direct
// undefined is a falsy value

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`Wrong request!`);
// }

// jonas.location = `Portugal`;
// jonas["twitter"] = `@jonasschmedtman`;
// console.log(jonas);

// Challenge
// "Jonas has 3 friends and his best friend is called Mike"
// write this without hard coding it
// easy work

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Mike", "Peter", "Steven"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const myCountry = {
//   country: "Finland",
//   capital: "Helsinki",
//   language: "finnish",
//   population: 6,
//   neighbors: ["Norway", "Sweden", "Russia"],
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people ${myCountry.length} neighboring countries and a capital called ${myCountry.capital}`
// );

// Increasing population using dot notation
// myCountry.population += 2;
// console.log(myCountry.population);

// Increasing population using bracket notation
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Mike", "Peter", "Steven"],
//   hasDriversLicense: true,
// need an expression in an object
// just delcaring the function would not word
// using calcAge as a 'key'
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },

//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${jonas.firstName} is a ${jonas.calcAge()}-year old ${
//       jonas.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// Coding Excercise 7: Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// Iteration: The for Loop

// loops are fundamental of every programming language
// allow us to automate repetitive tasks

console.log("lifting weights repetition 1");
console.log("lifting weights repetition 2");
console.log("lifting weights repetition 3");
console.log("lifting weights repetition 4");

// ^^ not ideal or best practice that's what loops are for
// for loop
// for loops keeps running while the condition is true
// needs a stop condition 'i < 10'

for (let i = 0; i < 10; i++) {
  console.log(`lifting weights repetition [i]`);
}

// Looping Arrays, Breaking, and Continuing
