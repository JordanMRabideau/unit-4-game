var randomNum = $(".randomNum");
var redGem = $("#redGem");
var greenGem = $("#greenGem");
var yellowGem = $("#yellowGem");
var blueGem = $("#blueGem");
var score = $("#currentScore");
var scoreHolder = 0;
var wins = 0;
var losses = 0;


// Generates a new random number between 19 and 121 for the goal, and between 1 and 12 for each crystal button
function newNumbers() {
    randomNum.text(Math.floor((Math.random() * 103) + 19));
    redGem.val(Math.floor((Math.random() * 12) + 1));
    greenGem.val(Math.floor((Math.random() * 12) + 1));;
    yellowGem.val(Math.floor((Math.random() * 12) + 1));
    blueGem.val(Math.floor((Math.random() * 12) + 1));
}

function checkWin() {
    // May want to insert FUNCTION TIMEOUTS to ensure the end score is displayed before the alert
    if (score.text() == randomNum.text()) {
        $("#winNum").text(wins++);
        newNumbers();
        scoreHolder = 0;
        score.text("");
        alert('You win!');
    } else if (parseInt(randomNum.text()) < parseInt(score.text())) {
        $("#lossNum").text(losses++);
        newNumbers();
        scoreHolder = 0;
        score.text("")
        alert('You lose.');
    };
}
// Click event that differentiates between buttons and adds the value of each button to the score
$(".gems").on("click", function(evt) {
    if (evt.target.id === 'redGem') {
        score.text(scoreHolder += parseInt(redGem.val()));
    } else if (evt.target.id === 'greenGem') {
        score.text(scoreHolder += parseInt(greenGem.val()));
    } else if (evt.target.id === "yellowGem") {
        score.text(scoreHolder += parseInt(yellowGem.val()));
    } else if (evt.target.id === 'blueGem') {
        score.text(scoreHolder += parseInt(blueGem.val()));
    };
    console.log(score.text())    
    checkWin();
});

function newGame() {
    newNumbers();
    $("#winNum").text(wins);
    $("#lossNum").text(losses);
}

newGame();
console.log(randomNum.text())