//Define calculate fx
function calculate(x, y, oper) {
    let r;

// Switch, Case: Perform calculation based on operation
    switch(oper) {
        case '+':
            r = x + y;
            break;
        case '-':
            r = x - y;
            break;
        case '*':
            r = x * y;
            break;
        case '/':
            r = x / y;
            break;
        default:
            r = NaN;
            break;
    }
    
    return r;
}

let again;

do {
    const num1 = parseFloat(prompt('Enter first number: '));
    const num2 = parseFloat(prompt('Enter second number: '));
    const oper = prompt('Enter operator (+, -, * or /): ');
    const res = calculate(num1, num2, oper);
    if (isNaN(res)) {
        console.log("Invalid input. Please enter valid input (numbers and operations).");
    } else {
        console.log(`${num1} ${oper} ${num2} = ${res}`);
    }

    do {
        again = prompt("Want to play again? (y/n)").toLowerCase();
    } while (again !== "y" && again !== "n");

} while (again === "y");