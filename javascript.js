
function computerSelection() {
    const randomVariable = ["Rock", "Paper", "Scissors"];
    return randomVariable[Math.floor(Math.random() * randomVariable.length)];
}

function playerSelection() {
    let input = prompt("Rock, paper or scissors?");
    let inputFirstLetter = input.charAt(0);
    let inputFirstLetterUpperCase = inputFirstLetter.toUpperCase()
    let inputRemainingLetters = input.slice(1);
    let inputRemainingLettersLowerCase = inputRemainingLetters.toLowerCase() 
    answer = inputFirstLetterUpperCase + inputRemainingLettersLowerCase
    
    if (answer === "Rock" || answer === "Paper" || answer === "Scissors") {
        realAnswer = "yes"
        return answer;
    }   else {
        alert("Please enter either 'Rock', 'Paper' or 'Scissors'.")
        return playerSelection()
    }
}
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection()
    const computerChoice = computerSelection()
    // console.log(playerChoice) 
    // console.log(computerChoice)
    if (playerChoice === computerChoice) {
        console.log ("It's a draw! Both went " + playerChoice)
        return ("Draw")
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        console.log ("You Win! Rock beats Scissors")
        return ("Win")
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        console.log ("You Lose! Paper beats Rock")
        return ("Lose")
    }    
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        console.log ("You Win! Paper beats Rock")
        return ("Win")
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        console.log ("You Lose! Scissors beats Paper")
        return ("Lose")
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log ("You Win! Scissors beats Paper")
        return ("Win")
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        console.log ("You Lose! Rock beats Scissors")
        return ("Lose")
    }   
}

function game(rounds) {
    console.log("Play " + rounds + " times and see who wins!")
    let scorePlayer = 0
    let scoreComputer = 0
    for (let i = 0; i < rounds; i++) {
        let winLoseOrDraw = playRound(playerSelection, computerSelection)
        if (winLoseOrDraw === "Win") {
            scorePlayer++
        }
        if (winLoseOrDraw === "Lose") {
            scoreComputer++
        }
        console.log("Score is " + scorePlayer + " - " + scoreComputer)
    }        
    if (scorePlayer > scoreComputer) {
        return ("Player wins!")
    }
        else if (scorePlayer < scoreComputer) {
            return ("Computer wins!")    
    }
    else if (scorePlayer = scoreComputer) {
        return ("Draw!")    
}
}

function chooseHowManyRounds() {
    input = prompt("Type how many rounds you want to play");

        if (!isNaN(input)) {
            return game(input)
        }
        else {
            alert("write a number")
            chooseHowManyRounds()
        }
}

chooseHowManyRounds()

