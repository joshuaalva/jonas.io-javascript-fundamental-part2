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

function logger() {
  // within the curly braces is the function body
  // code that will be run when the function is run
  console.log(`my name is joshua`);
  // in theory we have to use this line of code multiple times that's why we put it in a function
}

// invoking, calling, or running the function
logger();
// Expected output: `my name is joshua`
// can run as many times as we want
logger();
logger();
logger();

// function can reuse a piece of code but can also return/recieve date
// think of functions like a machine
// in --> does something (body) --> out

// parameters: are like variables that are specific only to this function
// will be defined once we call the function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples, and ${oranges} oranges.`;
  return juice; // return any value from the function
}

// called processor function 5, 0
// printed 5 0 into the console
// result of calling the function we have to save it by capturing it into a variable
// then we log the console
const appleJuice = fruitProcessor(5, 0);
// first parameter = 5, second parameter = 0 --> also known as 'arguements'
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // did not capture the variable

const appleOrangeJuice = fruitProcessor(2, 0);
console.log(appleOrangeJuice);

// function allow us to write more maintanable code
// very important principle for writing clean code
// don't repeat yourself --> keep code dry

const num = Number("23");
// number is a function
// capture the stringed 23 as a variable num
