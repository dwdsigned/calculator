const numbersDiv = document.getElementById("numberButtons");
let digits = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator")
// console.log(numberButtons);
// console.log(numberButtons.length);

// operator

// Using a For Of loop, assigns the grid-area to the button's id
for (button of digits) {
    button.style.gridArea = `${button.id}`;
}

// Using a For Of loop, assigns the grid-area to the button's id for the operators
for (button of operators) {
    button.style.gridArea = `${button.id}`;
}