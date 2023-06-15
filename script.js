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

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Portugal", 10);
describePopulation("China", 1441);
