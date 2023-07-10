function favoriteAnimal(animal) {
    return animal + "is my favorite animal!";
}

// console.log(favoriteAnimal('Goat'));

function add7(num1) {
    return num1 + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string1) {
    string2 = string1.charAt(0).toUpperCase();
    sliceString = string1.slice(1).toLowerCase();
    return string2 + sliceString;
}

function lastLetter(string1) {
    return string1.slice(-1)
}

// console.log(add7(3));
// console.log(multiply(5, 5));
// console.log(capitalize("aIAn"))
// console.log(lastLetter("aaaaacccss"))

// This is a number
const answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// This is a string
// const answer = prompt("Please enter the number you would like to FizzBuzz up to: ");

// returns the type of the variable
// console.log(typeof answer);

// for loop
for (let i = 1; i <= answer; i++) {

    if(i % 3 == 0  && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}