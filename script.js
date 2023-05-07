// Get the circle element
const circle = document.getElementById("circle");

// Get the score and timer elements
const scoreValue = document.getElementById("score-value");
const timerValue = document.getElementById("timer-value");

// Get the button element
const startBtn = document.getElementById('startBtn');

// retrieve high score from local storage
let highScore = localStorage.getItem("TapTheCircleHighScoreValue");

// check if high score is null or undefined
if (highScore === null || highScore === undefined) {
    highScore = 0; // set high score to zero if not found in local storage
}



// Set the initial score and time limit
let score = 0;
let timeLeft = 30;
let started = false;



// Set the interval for the game timer
const timer = setInterval(() => {
    if (started) {
        timeLeft--;
        timerValue.innerText = timeLeft;
        if (timeLeft === 0) {
            // Game over - clear the timer and show the score
            clearInterval(timer);
            circle.removeEventListener("click", addScore);
            alert("Game over! Your score is " + score);
        }
    }
}, 1000);


// Function to add score when circle is clicked
function addScore() {
    if (started) {
        score++;
        scoreValue.innerText = score;
    }

    // compare current score with high score
    if (score > highScore) {
        highScore = score; // update high score if current score is higher
        localStorage.setItem("TapTheCircleHighScoreValue", highScore); // store high score in local storage
    }
}

// function to sart the game 
function startGame() {
    started = true;
    console.log('clicked ', started);
    startBtn.style.display = 'none';
}

function initialize(){
    highScoreVal.innerText = highScore;
}
// Add event listern to start button
startBtn.addEventListener('click', startGame);


// Add event listener for the circle click
circle.addEventListener("click", addScore);