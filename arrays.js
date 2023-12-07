// Array of fruits

// [0,1,2]
const fruits = ["Apple", "Orange", "Mange"];
console.log(fruits);

// Array of numbers
// [0,1,2,3]
const numbers = [1, 45, 654, 43];
console.log(numbers);

// This prints the first element in the fruit array "Apple"
console.log(fruits[0]);

// This prints the third element in the fruit array "654"
console.log(numbers[2]);

// This prints the last element in the fruit array "Mange"
console.log(fruits[fruits.length - 1]);

// This adds a fruit to the end of the fruits array
fruits.push("Kiwi");
console.log(fruits);

// This adds a true to the end of the fruits array
fruits.push(true);
console.log(fruits);

// This adds a 56 to the end of the fruits array
fruits.push(56);
console.log(fruits);

// This removes the last element from the fruits array
// and assigns it to "lastElement"
const lastElement = fruits.pop();
console.log(lastElement);

// This adds "Hello" to the front of the numbers array
numbers.unshift("Hello");
console.log(numbers);

// This removes "Hello" to the front of the numbers array
numbers.shift();
console.log(numbers);

//This gives a smaller slice from the second element
// in the array to fourth element, but not including the fourth element
// Does not change old array
const newArr = numbers.slice(1, 3);
console.log(newArr);
console.log(numbers);

//This gives a smaller slice from the second element
// in the array to fourth element, including the fourth element
// Does change old array
const newArrSplice = numbers.splice(1, 3);
console.log(newArrSplice);
console.log(numbers);

// for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

let nums = 5;
while(nums < 7){
    nums++
    console.log(nums)
}

const newNumbers = [1, 45, 654, 43];
for(let i = 0; i < newNumbers.length; i++){
    newNumbers[i] *= 2
    fruits[i] += "s"
}

console.log(newNumbers)
console.log(fruits)
