document.addEventListener("DOMContentLoaded", () => {
    let num1;
    let num2;
    let operator;
    
    // Sum
    function sum(num1, num2) {
        return num1 + num2;
    }
    
    // Subtract
    function subtract(num1, num2) {
        return num1 - num2;
    }
    
    // Multiply
    function multiply(num1, num2) {
        return num1 * num2;
    }
    
    // Divide
    function divide(num1, num2) {
        return num1 / num2;
    }
    
    // Operate
    function operate(operator, num1, num2) {
    
    }
    
    // Create object for buttons
    const buttons = document.querySelectorAll('.number');
    // Create object for display div
    const displayObj = document.getElementById('display');
    
    // Loop through each button
    buttons.forEach((button) => {
        // Add an event listener when a button is clicked
        button.addEventListener("click", () => {
            // Change the display to whatever was clicked.
            displayObj.textContent = button.textContent;
            // Assign number to variable
            num1 = button.textContent;
        })  
    })
});
