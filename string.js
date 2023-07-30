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
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
let text2 = "Apple, Banana, Kiwi";
let part1 = text2.slice(7);
window.alert(part1);

let text3 = "Please visit Microsoft and Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");

let text4 = "Hello World!";       // String
let text5 = text5.toLowerCase();  // text2 is text1 converted to lower

let text6 = "Hello";
let text7 = "World";
let text8 = text6.concat(" ", text7);

//trim() - removes whitespaces
let text9 = "      Hello World!      ";
let text10 = text9.trim();
let text11 = "     Hello World!     ";
let text2 = text1.trimStart();