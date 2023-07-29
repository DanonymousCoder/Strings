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