// Assign firstName to be be Aaron
let firstName = "Aaron";
console.log(firstName);

// Assign firstName to be be Betty
// This can be changed because I used "let"
firstName = "Betty";
console.log(firstName);

// Assign lastName to be be Katz
const lastName = "Katz";
console.log(lastName);

// This does not work because I used "const"
// If I run this line I will get an error
lastName = "NotKatz";
console.log(lastName);

// This will return true even though the number 5 is not
// the same as the string "5"
console.log(5 == "5");

// This will return false because the string "5" is not
// the same as the number 5
console.log(5 === "5");

// This will return true because the number 5 is
// the same as the number 5
console.log(5 === 5);

// This will return false because it takes 5 === 5
// and flip the value because of "!"
console.log(5 !== 5);

// This will return true because it takes 5 === "5"
// and flip the value because of "!"
console.log(5 !== "5");

let rainy = true;

// This is an if statement since rainy is "true"
// it will print out the first statement
if (rainy) {
  console.log("Of course it is raining outside");
} else {
  console.log("It is not raining outside");
}

rainy = false;
// Since we changed rainy to "false" it will
// print the second statement
if (rainy) {
  console.log("Of course it is raining outside");
} else {
  console.log("It is not raining outside");
}


let sunny = true;
// Since we changed rainy to "false" it will skip the first statement
// Then since sunny is "true" it will print the second statement
if (rainy) {
  console.log("Of course it is raining outside");
} else if (sunny) {
  console.log("Enjoy the sunshine");
} else {
  console.log("It is not raining outside");
}

sunny = false;
// Since rainy is "false" it will skip the first statement
// Then since sunny is "false" it will skip the second statement
// Finally is will print the last statement
if (rainy) {
  console.log("Of course it is raining outside");
} else if (sunny) {
  console.log("Enjoy the sunshine");
} else {
  console.log("It is not raining outside");
}



rainy = true;
let seattle = true;
// Since both rainy and seattle are "true" it will print
// the first statement
if (rainy && seattle) {
  console.log("Of course it is raining outside you live in Seattle");
} else if (sunny) {
  console.log("Enjoy the sunshine");
} else {
  console.log("It is not raining outside");
}

rainy = false;
seattle = true;
// Since seattle is "true" it will print
// the first statement
// It will also print the first statement
// if rainy is "true" and seattle is "false"
// or if both are true
if (rainy || seattle) {
  console.log("Of course it is raining outside you live in Seattle");
} else if (sunny) {
  console.log("Enjoy the sunshine");
} else {
  console.log("It is not raining outside");
}


// Old way of writing a function
function sayHello() {
  console.log("Hello and Goodbye");
}

// Newer way of writing a function
// Do this
const sayHelloArrow = () => {
  console.log("Hello and Goodbye");
};

// How to call a function
sayHelloArrow();
sayHelloArrow();
sayHelloArrow();
sayHelloArrow();
sayHelloArrow();

// this function take in two parameters (values)
// and returns the value of them multiplied

const multiplied = (valueOne, valueTwo) => {
  return valueOne * valueTwo;
};

let returnValue = multiplied(2, 4);
console.log(returnValue)
returnValue = multiplied(3, 4);
console.log(returnValue);


const whereAreYouLiving = (name, state) => {
  // return "Hello my name is " + name + " and I live in " + state + " state"

  // This is a better way to write strings. 
  return `Hello my name is ${name} and I live in ${state} state`;
};

console.log(whereAreYouLiving("Aaron", "Washington"));


// Generates a random number between 1 and 100
console.log(Math.floor(Math.random() * 100));
