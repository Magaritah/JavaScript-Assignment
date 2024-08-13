// JavaScript Fundamentals

// Variable declarations
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;

// Function declarations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Example console logs
console.log("String variable: ", stringVar);
console.log("Number variable: ", numberVar);
console.log("Boolean variable: ", booleanVar);

console.log("Add: ", add(5, 3));
console.log("Subtract: ", subtract(5, 3));
console.log("Multiply: ", multiply(5, 3));
console.log("Divide: ", divide(5, 3));

// DOM Manipulation

// Event listeners for buttons
document.getElementById('addBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = add(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = subtract(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = multiply(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('divideBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        let result = divide(num1, num2);
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = "Cannot divide by zero";
    }
});
