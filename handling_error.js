const a = 5;
const b = 10;

function add(c) {
    return c;   
}

function print() {
    add();
}

print();

function helloWorld() {
    console.log("Hello World");
}

const str1 = ["Hello"];
// const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
// const message = str1.concat(str2);

console.log(message)
console.log(str1)