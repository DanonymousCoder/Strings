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
let text12 = text12.trimStart();
let text13 = "     Hello World!     ";
let text14 = text13.trimEnd();

//pad - for padding
let text15 = "5";
let padded = text15.padStart(4,"0");
let text16 = "5";
let padded1 = text16.padStart(4,"0");

let numb = 5;
let text17 = numb.toString();
let padded2 = text17.padStart(4,"0");

let numb1 = 5;
let text18 = numb1.toString();
let padded3 = text18.padEnd(4,"0");

// for extracting strings charAt charCodeAt property access[]
let text19 = "HELLO WORLD";
let char = text19.charAt(0);

let text20 = "HELLO WORLD";
let char1 = text20.charCodeAt(0);

let text21 = "HELLO WORLD";
let char2 = text21[0];

// split()
let txt = Ridwanullah, Sakiinah, Abdsalam;
let split = txt.split(",");
document.getElementById('demo')
