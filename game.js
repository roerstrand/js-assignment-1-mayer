// ========================================
// NUMBER GUESSING GAME - IMPROVED VERSION
// ========================================

class NumberGuessingGame {
    constructor() {
        // Game state
        this.secretNumber = null;
        this.attempts = 0;
        this.maxAttempts = 10;
        this.isGameActive = false;
        this.gameHistory = [];
        
        // DOM elements
        this.elements = {
            guessInput: document.getElementById('guessInput'),
            submitGuess: document.getElementById('submitGuess'),
            startGame: document.getElementById('startGame'),
            quitGame: document.getElementById('quitGame'),
            statusText: document.getElementById('statusText'),
            attemptsCount: document.getElementById('attemptsCount'),
            gameHistory: document.getElementById('gameHistory'),
            historyList: document.getElementById('historyList'),
            scoreDisplay: document.getElementById('scoreDisplay'),
            finalScore: document.getElementById('finalScore'),
            scoreMessage: document.getElementById('scoreMessage')
        };
        
        // Initialize the game
        this.initializeEventListeners();
        this.updateUI();
    }

    // ========================================
    // INITIALIZATION METHODS
    // ========================================

    initializeEventListeners() {
        // Submit guess button
        this.elements.submitGuess.addEventListener('click', () => this.handleGuess());
        
        // Enter key in input field
        this.elements.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleGuess();
            }
        });
        
        // Start new game button
        this.elements.startGame.addEventListener('click', () => this.startNewGame());
        
        // Quit game button
        this.elements.quitGame.addEventListener('click', () => this.quitGame());
    }

    // ========================================
    // GAME LOGIC METHODS
    // ========================================

    generateRandomNumber() {
        // Generate a random number between 1 and 100
        return Math.floor(Math.random() * 100) + 1;
    }

    validateGuess(guess) {
        // Validate that the guess is a valid number between 1 and 100
        const num = parseInt(guess);
        if (isNaN(num) || num < 1 || num > 100) {
            return { isValid: false, message: 'Please enter a valid number between 1 and 100.' };
        }
        return { isValid: true, value: num };
    }

    checkGuess(playerGuess) {
        // Compare the player's guess with the secret number
        if (playerGuess < this.secretNumber) {
            return { result: 'low', message: 'Too low! Try a higher number.' };
        } else if (playerGuess > this.secretNumber) {
            return { result: 'high', message: 'Too high! Try a lower number.' };
        } else {
            return { result: 'correct', message: '🎉 Correct! You found the number!' };
        }
    }

    calculateScore() {
        // Calculate score based on attempts (100 points for perfect game, -10 per attempt)
        return Math.max(0, 100 - (this.attempts - 1) * 10);
    }

    // ========================================
    // GAME STATE METHODS
    // ========================================

    startNewGame() {
        // Reset game state and start a new game
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.isGameActive = true;
        this.gameHistory = [];
        
        // Update UI
        this.updateUI();
        this.elements.guessInput.focus();
        
        // Update status
        this.updateStatus('Game started! Guess a number between 1 and 100.', 'blue');
        
        console.log('New game started. Secret number:', this.secretNumber);
    }

    quitGame() {
        // Quit the current game
        if (this.isGameActive) {
            this.isGameActive = false;
            this.updateStatus('Game quit. Click "Start New Game" to play again.', 'gray');
            this.elements.guessInput.value = '';
            this.elements.guessInput.disabled = true;
            this.elements.submitGuess.disabled = true;
        }
    }

    endGame(won) {
        // End the current game and show results
        this.isGameActive = false;
        
        if (won) {
            const score = this.calculateScore();
            this.updateStatus(`🎉 Congratulations! You won in ${this.attempts} attempts!`, 'green');
            this.showFinalScore(score, 'You defeated the game!');
        } else {
            this.updateStatus(`😔 Game over! The number was ${this.secretNumber}.`, 'red');
            this.showFinalScore(0, 'Better luck next time!');
        }
        
        // Disable input
        this.elements.guessInput.disabled = true;
        this.elements.submitGuess.disabled = true;
    }

    // ========================================
    // USER INTERACTION METHODS
    // ========================================

    handleGuess() {
        // Handle the player's guess
        if (!this.isGameActive) {
            this.updateStatus('Please start a new game first.', 'yellow');
            return;
        }

        const guessValue = this.elements.guessInput.value.trim();
        const validation = this.validateGuess(guessValue);

        if (!validation.isValid) {
            this.updateStatus(validation.message, 'red');
            this.elements.guessInput.value = '';
            this.elements.guessInput.focus();
            return;
        }

        // Process valid guess
        this.attempts++;
        const guess = validation.value;
        const result = this.checkGuess(guess);
        
        // Add to history
        this.addToHistory(guess, result);
        
        // Update UI
        this.updateUI();
        this.elements.guessInput.value = '';
        this.elements.guessInput.focus();

        // Check game end conditions
        if (result.result === 'correct') {
            this.endGame(true);
        } else if (this.attempts >= this.maxAttempts) {
            this.endGame(false);
        } else {
            this.updateStatus(result.message, 'blue');
        }
    }

    // ========================================
    // UI UPDATE METHODS
    // ========================================

    updateUI() {
        // Update attempts counter
        this.elements.attemptsCount.textContent = this.attempts;
        
        // Update input field state
        this.elements.guessInput.disabled = !this.isGameActive;
        this.elements.submitGuess.disabled = !this.isGameActive;
        
        // Show/hide game history
        if (this.gameHistory.length > 0) {
            this.elements.gameHistory.classList.remove('hidden');
        } else {
            this.elements.gameHistory.classList.add('hidden');
        }
    }

    updateStatus(message, color = 'blue') {
        // Update the status message with color coding
        this.elements.statusText.textContent = message;
        
        // Remove existing color classes
        this.elements.statusText.className = 'text-blue-800 font-medium';
        
        // Add new color class
        switch (color) {
            case 'green':
                this.elements.statusText.className = 'text-green-800 font-medium';
                break;
            case 'red':
                this.elements.statusText.className = 'text-red-800 font-medium';
                break;
            case 'yellow':
                this.elements.statusText.className = 'text-yellow-800 font-medium';
                break;
            case 'gray':
                this.elements.statusText.className = 'text-gray-800 font-medium';
                break;
            default:
                this.elements.statusText.className = 'text-blue-800 font-medium';
        }
    }

    addToHistory(guess, result) {
        // Add guess to game history
        const historyItem = {
            attempt: this.attempts,
            guess: guess,
            result: result.result,
            message: result.message
        };
        
        this.gameHistory.push(historyItem);
        this.updateHistoryDisplay();
    }

    updateHistoryDisplay() {
        // Update the history display
        this.elements.historyList.innerHTML = '';
        
        this.gameHistory.forEach(item => {
            const historyElement = document.createElement('div');
            historyElement.className = 'flex justify-between items-center p-2 bg-gray-50 rounded';
            
            const resultIcon = item.result === 'correct' ? '🎯' : 
                             item.result === 'high' ? '📈' : '📉';
            
            historyElement.innerHTML = `
                <span class="text-sm text-gray-600">Attempt ${item.attempt}: ${item.guess}</span>
                <span class="text-sm font-medium">${resultIcon} ${item.result.toUpperCase()}</span>
            `;
            
            this.elements.historyList.appendChild(historyElement);
        });
    }

    showFinalScore(score, message) {
        // Show the final score display
        this.elements.finalScore.textContent = `Score: ${score} points`;
        this.elements.scoreMessage.textContent = message;
        this.elements.scoreDisplay.classList.remove('hidden');
    }

    // ========================================
    // UTILITY METHODS
    // ========================================

    resetGame() {
        // Reset all game state and UI
        this.secretNumber = null;
        this.attempts = 0;
        this.isGameActive = false;
        this.gameHistory = [];
        
        this.elements.guessInput.value = '';
        this.elements.guessInput.disabled = false;
        this.elements.submitGuess.disabled = false;
        this.elements.scoreDisplay.classList.add('hidden');
        this.elements.gameHistory.classList.add('hidden');
        
        this.updateStatus('Ready to play! Click "Start New Game" to begin.', 'blue');
        this.updateUI();
    }
}

// ========================================
// GAME INITIALIZATION
// ========================================

// Wait for DOM to load, then initialize the game
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Number Guessing Game - Improved Version');
    console.log('Features: Modern UI, Quit functionality, Game history, Score tracking');
    
    // Initialize the game
    const game = new NumberGuessingGame();
    
    // Make game globally accessible for debugging
    window.numberGuessingGame = game;
});