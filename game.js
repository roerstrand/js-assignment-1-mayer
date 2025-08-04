function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(attemptsLeft) {
    let input;

    while (true) {
        input = prompt(
            `🔢 Enter a whole number between 1 and 100\n` +
            `🕹 Attempts left: ${attemptsLeft}\n\n` +
            `Or press "Cancel" to quit the game.`
        );

        if (input === null) {
            return null;
        }

        input = input.trim();

        if (
            input !== "" &&
            Number.isInteger(Number(input)) &&
            Number(input) >= 1 &&
            Number(input) <= 100
        ) {
            return Number(input);
        }

        alert("❌ Invalid input! Please enter a whole number between 1 and 100.");
    }
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "📉 Too low!";
    } else if (playerGuess > correctNumber) {
        return "📈 Too high!";
    } else {
        return "✅ Correct!";
    }
}

function game() {
    alert(
        "🎮 Welcome to the Number Guessing Game!\n\n" +
        "I'm thinking of a number between 1 and 100.\n" +
        "You have 10 chances to guess it right.\n\n" +
        "Good luck, challenger!"
    );

    const secretNumber = generateRandomNumber();
    const maxAttempts = 10;
    let attempts = 0;
    let hasWon = false;

    while (attempts < maxAttempts) {
        const attemptsLeft = maxAttempts - attempts;
        const guess = getPlayerGuess(attemptsLeft);

        if (guess === null) {
            alert("👋 Game cancelled. Thanks for playing!");
            return;
        }

        attempts++;
        const result = checkGuess(guess, secretNumber);
        alert(`Attempt ${attempts}: You guessed ${guess}\n${result}`);

        if (result.includes("Correct")) {
            hasWon = true;
            break;
        }
    }

    const finalMessage = hasWon
        ? `🎉 Well done! You guessed the number ${secretNumber} in ${attempts} attempt(s).\nYour score: ${100 - (attempts - 1) * 10} points.`
        : `😈 Game over! You used all ${maxAttempts} attempts.\nThe correct number was ${secretNumber}.`;

    alert(finalMessage);

    const playAgain = confirm("🔁 Would you like to play again?");
    if (playAgain) {
        game();
    } else {
        alert("👋 Thanks for playing. See you next time!");
    }
}

game();