function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    let input = prompt("Enter a whole number between 1 and 100:");

    // Check if user clicked Cancel
    if (input === null) {
        return null;
    }

    // Check if input is valid
    if (
        input.trim() !== "" &&
        Number.isInteger(Number(input.trim())) &&
        Number(input.trim()) >= 1 &&
        Number(input.trim()) <= 100
    ) {
        return Number(input.trim());
    }

    // Invalid input - show error and return a special value
    alert("Invalid input! Please enter a whole number between 1 and 100.");
    return "invalid"; // Special value to indicate invalid input
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
        
        // Check if user clicked Cancel
        if (playerGuess === null) {
            alert("Game cancelled. Thanks for playing!");
            return; // Exit the game
        }
        
        // Check if input was invalid (don't count as attempt)
        if (playerGuess === "invalid") {
            continue; // Skip this iteration, don't increment attempts
        }
        
        // Valid input - count as attempt
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

numberGuessingGame();
