//STEP 1: Half of a number
function halfNumber() {
    const num = parseFloat(prompt('Enter a number: '));
    const r = num / 2;
    console.log(`Half of ${num} is: ${r}`);
}
halfNumber();

//STEP 2: Square of a number
function squareNumber(num) {
    const r = num * num;
    console.log(`The result of squaring the number ${num} is: ${r}`);
}
var num = parseInt(prompt("Enter number:"));
squareNumber(num);

//STEP 3: Percent of a number
function percentOf(num1, num2) {
    const r = (num1 / num2) * 100;
    console.log(`${num1} is ${r}% of ${num2}`);
}
var num1 = parseInt(prompt("Enter number 1:"));
var num2 = parseInt(prompt("Enter number 2:"));
percentOf(num1, num2);

//STEP 4: Modulus of two numbers
function Modulus(num1, num2) {
    const r = num1 % num2;
    console.log(`${r} is the modulus of ${num1} and ${num2}.`);
}

var num1 = parseInt(prompt("Enter number 1:"));
var num2 = parseInt(prompt("Enter number 2:"));

Modulus(num1, num2);