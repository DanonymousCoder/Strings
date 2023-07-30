const string = 'This is a string';
console.log(string);

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

const big = 'I\'m a boy';
console.log(big);

const name = 'Sakiinah';
const greeting = `Hello, ${name}`;
alert(greeting); // Hello, Chris

const one = "Hello";
const two = "how are you";
const joined = `${one}, ${two}`;
alert(joined);// Hello, how are you

const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, so nice to see you`);
}
button.addEventListner("click", greet);

// Using  '+'
const g = "Hello";
const n = "Sakiinah";
console.log(g + ', ' + n);

//Using template literals
const g2 = "Hello";
const n2 = "Sakiinah";
console.log(`${g2}, ${n2}`);

// number vs strings
const str = "page";
const num = 404;
console.log (`${str} ${num}`);// page 404

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


// String method

//Length - returns length
const text = "abcdefghijk";
let length = text.length;

//Slice
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
