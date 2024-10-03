// You can experiment here, it won’t be checked
// let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
// arr.splice(3, 2);
//
// console.log(arr); // [ 'one', 'two', 3, 6, 'seven', 8 ]
//
// arr.splice(3, 2, "Here's", "Johnny!");
//
// console.log(arr); // [ 'one', 'two', 3, "Here's", 'Johnny!', 6, 'seven', 8 ]

// let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
// arr.splice(1, 0, "Here's", "Johnny!");
//
// console.log(arr); // [ 'one', "Here's", 'Johnny!', 'two', 3, 'four', 5, 6, 'seven', 8 ]


// let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
// arr.splice(-3);
//
// console.log(arr); // [ 'one', 'two', 3, 'four', 5 ]

// let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
// let newArr = arr.splice(-3);
//
// console.log(arr); // [ 'one', 'two', 3, 'four', 5 ]
// console.log(newArr); // [ 6, 'seven', 8 ]

// let str = "one two three";
// let arr = str.split(" ");

// console.log(arr); // [ 'one', 'two', 'three' ]

// let arr = str.split(" ", 1);
//
// console.log(arr); // [ 'one' ]

// let arr = str.split();
//
// console.log(arr); // [ 'one two three' ]

// let arr = str.split("", 7);
//
// console.log(arr); // [ 'o', 'n', 'e', ' ', 't', 'w', 'o' ]

// let colors = ["red", "green", "blue"];
// let numbers = [1, 2, 3, 4, 5];
// let sounds = ["bark", "meow", "quack", "buzz"];
// let arr = colors.concat(numbers, sounds);
//
// console.log(arr);
// [ 'red', 'green', 'blue', 1, 2, 3, 4, 5, 'bark', 'meow', 'quack', 'buzz' ]

// let colors = ["red", "green", "blue"];
// let numbers = [1, 2, 3, 4, 5];
// let sounds = ["bark", "meow", "quack", "buzz"];
// let arr = [].concat(colors, numbers, sounds);
//
// console.log(arr);
// [ 'red', 'green', 'blue', 1, 2, 3, 4, 5, 'bark', 'meow', 'quack', 'buzz' ]

let colors = ["red", "green", "blue"];
let arr = ["white"].concat(colors, "black");

console.log(arr); // [ 'white', 'red', 'green', 'blue', 'black' ]

let color1 = "red";
let color2 = "blue";
console.log(color1.concat(" ", color2)); // red blue

console.log("".concat("The", " ", "Thing")); // The Thing


let pancake = "milk, flour, egg, butter, sugar, baking powder, salt";
let pancakeIngredients = pancake.split(", ");
console.log(pancakeIngredients);