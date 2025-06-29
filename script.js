let Psc = document.getElementById("PlayerScore")
let Csc = document.getElementById("ComputerScore")
let roundResultElement = document.getElementById("roundResult")
let winnerMsg = document.getElementById("winnermsg")
let resultMsg = document.getElementById("resultmsg")

let BtnRock = document.getElementById("BtnRock")
let BtnPaper = document.getElementById("BtnPaper")
let BtnScissors = document.getElementById("BtnScissors")

let PlayerScore = 0
let ComputerScore = 0

let kontent = document.querySelector(".kontent")
let resetGameBtn = document.getElementById("resetbtn")

function getRandomComputerResult() {
    let options = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

function playerWonTheRound(player, computer) {
    if (player === "Rock" && computer === "Scissors") return true
    if (player === "Paper" && computer === "Rock") return true
    if (player === "Scissors" && computer === "Paper") return true
    return false
}

function getRoundResults(userOption) {
    const ComputerResult = getRandomComputerResult()
    let playerWon = playerWonTheRound(userOption, ComputerResult)

    if (playerWon) {
        PlayerScore++
        return `Player wins! ${userOption} beats ${ComputerResult}`
    }

    if (ComputerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`
    }

    if (!playerWon) {
        ComputerScore++
        return `Computer wins! ${ComputerResult} beats ${userOption}`
    }
}

function showResult(userOption) {
    let resultMessage = getRoundResults(userOption)
    resultMsg.innerText = resultMessage

    Psc.innerText = PlayerScore
    Csc.innerText = ComputerScore

    if (ComputerScore >= 3) {
        winnerMsg.innerText = "Computer has won the game!"
        resetGameBtn.style.display = "block"
        kontent.style.display = "none"
    }

    if (PlayerScore >= 3) {
        winnerMsg.innerText = "Player has won the game!"
        resetGameBtn.style.display = "block"
        kontent.style.display = "none"
    }
}

BtnRock.addEventListener("click", function () {
    showResult("Rock");
});
BtnPaper.addEventListener("click", function () {
    showResult("Paper");
});
BtnScissors.addEventListener("click", function () {
    showResult("Scissors");
});

resetGameBtn.addEventListener("click", resetGame)

function resetGame() {
    PlayerScore = 0
    ComputerScore = 0
    Psc.innerText = PlayerScore
    Csc.innerText = ComputerScore
    resetGameBtn.style.display = "none"
    kontent.style.display = "block"
    winnerMsg.innerText = ""
    resultMsg.innerText = resultMessage
}