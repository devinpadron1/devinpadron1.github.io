document.addEventListener('DOMContentLoaded', () => {

    // Points
    let playerPoints = 0;
    let computerPoints = 0;
    const pointsToWin = 5;
    
    let myScore = document.getElementById("myScore");
    let compScore = document.getElementById("compScore");
    myScore.innerText = `Player score: ${playerPoints}`;
    compScore.innerText = `Computer score: ${computerPoints}`;

    function updateScores() {
        myScore.innerText = `Player score: ${playerPoints}`;
        compScore.innerText = `Computer score: ${computerPoints}`;
    }

    // Computer Selection
    function getComputerChoice() {
        const words = ["rock", "paper", "scissors"];
        randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Selection images
    function getImage(selection) {
        switch (selection) {
            case 'rock':
                return "images/rock.png";
            case 'paper':
                return "images/paper.png";
            case 'scissors':
                return "images/scissors.png";
        }
    }

    // Buttons - Rock, Paper, Scissors
    const buttons =  document.querySelectorAll('.rpsButtons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let playerSelection = button.textContent;
            playerSelection = playerSelection.toLowerCase();
            document.getElementById("playerImage").src = getImage(playerSelection);
            
            let computerSelection = getComputerChoice();
            gameRound(playerSelection, computerSelection);
            document.getElementById("cpuImage").src = getImage(computerSelection);

            if (playerPoints == pointsToWin || computerPoints == pointsToWin) {
                gameButtons.forEach(element => {
                    element.style.display = "none";
                })
                playButton.style.display = "inline-block";
                playButton.style.fontSize = "50px";
                playButton.innerText = "PLAY AGAIN";               
            } if (playerPoints == pointsToWin) {
                resultMessage("YOU WIN!");
            } else if (computerPoints == pointsToWin) {
                resultMessage("YOU LOSE");
            }
        })
    })
    
    // Button - Play
    const playButton = document.getElementById("play"); // assign button to a variable
    const gameButtons = document.querySelectorAll(".rpsButtons button");
    
    playButton.addEventListener('click', () => {
        gameButtons.forEach(element => {
            element.style.display = "inline-block";
        })
 
        // Make play dissapear and rest show up
        playButton.style.display = "none";
        compScore.style.display = "block";
        myScore.style.display = "block";

        resultMessage(""); // Reset result message
        
        // Point reset
        playerPoints = 0;
        computerPoints = 0;
        updateScores();
    })

    // Result Message
    function resultMessage(message) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
    }

    // Simulates one round of the game
    function gameRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            resultMessage("Draw!");
            } else if (playerSelection == "rock") {
                if (computerSelection == "scissors") {
                    resultMessage("Rock beats Scissors. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Rock loses to Paper. You lose. :-(");
                    computerPoints++;
                }
            } else if (playerSelection == "scissors") {
                if (computerSelection == "paper") {
                    resultMessage("Scissors beat Paper. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Scissors loses to Rock. You lose. :-(");
                    computerPoints++;
                }
            } else { //if player selects paper
                if (computerSelection == "rock") {
                    resultMessage("Paper beats Rock. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Paper loses to Scissors. You lose. :-(");
                    computerPoints++;
                }
        }
        updateScores();
    }
})