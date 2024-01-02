const numbersDiv = document.getElementById("numberButtons");
let digits = document.querySelectorAll(".numbers");
// console.log(numberButtons);
// console.log(numberButtons.length);



// Using a For Of loop, assigns the grid-area to the button's id
for (button of digits) {
    button.style.gridArea = `${button.id}`;
}