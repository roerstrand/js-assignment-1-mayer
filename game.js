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

function game() {
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let hasWon = false;

    alert("Welcome to the Number Guessing Game!");
    alert("Try to guess the number between 1 and 100.");
    alert("You have 10 attempts to defeat the Shitty AI!");

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
game();