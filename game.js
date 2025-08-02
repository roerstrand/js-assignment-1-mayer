// ========================================
// ASSIGNMENT 2: MATHEMATICAL SHAPES
// ========================================

// Constants
const PI = Math.PI;

// a) Find the diagonal of a square where the length of each side is 9
function calculateSquareDiagonal(sideLength) {
    // Using Pythagorean theorem: diagonal = side * √2
    const diagonal = sideLength * Math.sqrt(2);
    console.log(`Square diagonal calculation:`);
    console.log(`Side length: ${sideLength}`);
    console.log(`Diagonal: ${diagonal.toFixed(2)}`);
    return diagonal;
}

// b) Find the area of a triangle where lengths of the three sides are 5, 6 and 7
function calculateTriangleArea(sideA, sideB, sideC) {
    // Using Heron's formula: area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2
    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    
    console.log(`Triangle area calculation:`);
    console.log(`Sides: ${sideA}, ${sideB}, ${sideC}`);
    console.log(`Semi-perimeter: ${semiPerimeter}`);
    console.log(`Area: ${area.toFixed(2)}`);
    return area;
}

// c) Find the circumference and surface area of a circle whose radius is 4
function calculateCircleProperties(radius) {
    // Circumference = 2 * π * radius
    const circumference = 2 * PI * radius;
    
    // Surface area = π * radius²
    const surfaceArea = PI * radius * radius;
    
    console.log(`Circle properties calculation:`);
    console.log(`Radius: ${radius}`);
    console.log(`Circumference: ${circumference.toFixed(2)}`);
    console.log(`Surface area: ${surfaceArea.toFixed(2)}`);
    
    return { circumference, surfaceArea };
}

// ========================================
// ASSIGNMENT 3: CONDITIONAL STATEMENTS
// ========================================

// a) Accept two integers and display the larger of the two
function findLargerNumber(num1, num2) {
    console.log(`Finding larger number:`);
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    
    if (num1 > num2) {
        console.log(`Larger number: ${num1}`);
        return num1;
    } else if (num2 > num1) {
        console.log(`Larger number: ${num2}`);
        return num2;
    } else {
        console.log(`Both numbers are equal: ${num1}`);
        return num1;
    }
}

// b) Check whether an integer is even or odd
function checkEvenOrOdd(number) {
    console.log(`Checking if number is even or odd:`);
    console.log(`Number: ${number}`);
    
    if (number % 2 === 0) {
        console.log(`${number} is even`);
        return "even";
    } else {
        console.log(`${number} is odd`);
        return "odd";
    }
}

// ========================================
// ASSIGNMENT 4: NUMBER GUESSING GAME
// ========================================

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    let input;

    while (true) {
        input = prompt("Enter a whole number between 1 and 100:");

        if (
            input !== null &&
            input.trim() !== "" &&
            Number.isInteger(Number(input.trim())) &&
            Number(input.trim()) >= 1 &&
            Number(input.trim()) <= 100
        ) {
            return Number(input.trim());
        }

        alert("Invalid input! Please enter a whole number between 1 and 100.");
    }
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Too low!";
    } else if (playerGuess > correctNumber) {
        return "Too high!";
    } else {
        return "Correct!";
    }
}

function numberGuessingGame() {
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let hasWon = false;

    alert("Welcome to the Number Guessing Game!");
    alert("Try to guess the number between 1 and 100.");
    alert("You have 10 attempts to defeat the Evil AI!");

    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();
        attempts++;

        const result = checkGuess(playerGuess, secretNumber);

        alert("Attempt " + attempts + ": " + playerGuess + " - " + result);

        if (result === "Correct!") {
            hasWon = true;
            break;
        }
    }

    if (hasWon) {
        const score = 100 - (attempts - 1) * 10;
        alert(`🎉 Congratulations! You guessed the number in ${attempts} attempts.\nYour score: ${score} points.`);
    } else {
        alert(`😈 You lost! The correct number was ${secretNumber}.\nBetter luck next time.`);
    }
}

// ========================================
// MAIN EXECUTION
// ========================================

console.log("=== MATHEMATICAL SHAPES ASSIGNMENT ===");
console.log("");

// Run mathematical shape calculations
calculateSquareDiagonal(9);
console.log("");

calculateTriangleArea(5, 6, 7);
console.log("");

calculateCircleProperties(4);
console.log("");

console.log("=== CONDITIONAL STATEMENTS ASSIGNMENT ===");
console.log("");

// Run conditional statement examples
findLargerNumber(15, 8);
console.log("");

findLargerNumber(3, 12);
console.log("");

findLargerNumber(7, 7);
console.log("");

checkEvenOrOdd(24);
console.log("");

checkEvenOrOdd(17);
console.log("");

checkEvenOrOdd(0);
console.log("");

console.log("=== NUMBER GUESSING GAME ASSIGNMENT ===");
console.log("Starting the game...");
console.log("");

// Start the number guessing game
numberGuessingGame();