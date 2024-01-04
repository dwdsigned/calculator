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




// Calculator functionality
// What do I need?
// Each button should enter the corresponding number or operator when pressed 
// The display needs to clear when the "C" button is pressed. The display should be reset to "0" "Zero"

// *************************************************************************************************************

// Store first number
// operator
// +,-, *, / operators should put first/previous number somewhere
// = operator should add all previous numbers together
// display = [1,]

const calculatorDisplay = document.getElementById("calculatorDisplay");
console.log(calculatorDisplay);

const enteredNumbers = [533, 34, 243, 34];

calculatorDisplay.textContent = `${enteredNumbers[0]} ${enteredNumbers[1]} ${enteredNumbers[2]} ${enteredNumbers[3]}`;
