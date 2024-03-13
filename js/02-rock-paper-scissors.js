//Rock, Paper, Scissors game: user vs.computer
var user = prompt("Choose rock, paper, scissors? ");
var computer = Math.random();
if (computer < 0.34) {
    computer = "rock";
} else if (computer <= 0.67) {
    computer = "paper";
} else {
    computer = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "Result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

console.log("User Choice: " + user);
console.log("Computer Choice: " + computer);
console.log(compare(user, computer));